<?php
// upload_image.php — Uploader une image
// POST multipart/form-data avec: image, name, category, alt_text, sort_order

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/db.php';

header('Content-Type: application/json');
add_security_headers();

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (preg_match('/famaby\.sn$|localhost/', $origin)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// Auth simple via token (à sécuriser en production)
$auth_token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$config = require __DIR__ . '/config.php';
$expected_token = $config['admin_token'] ?? 'famaby-admin-2026';

if ($auth_token !== "Bearer $expected_token") {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Non autorisé']);
    exit;
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Aucune image envoyée ou erreur d\'upload']);
    exit;
}

$file = $_FILES['image'];
$name = sanitize($_POST['name'] ?? '');
$category = sanitize($_POST['category'] ?? 'general');
$alt_text = sanitize($_POST['alt_text'] ?? '');
$sort_order = intval($_POST['sort_order'] ?? 0);

// Validation
$allowed_types = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
if (!in_array($file['type'], $allowed_types)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Type de fichier non autorisé. Utilisez JPG, PNG, WebP, GIF ou SVG.']);
    exit;
}

$max_size = 5 * 1024 * 1024; // 5 MB
if ($file['size'] > $max_size) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Le fichier dépasse 5 Mo.']);
    exit;
}

$allowed_categories = ['logo', 'hero', 'partner', 'product', 'news', 'about', 'general'];
if (!in_array($category, $allowed_categories)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Catégorie invalide']);
    exit;
}

if (empty($name)) {
    $name = pathinfo($file['name'], PATHINFO_FILENAME);
}

// Créer le dossier uploads
$upload_dir = __DIR__ . '/../images/uploads';
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

// Générer un nom de fichier unique
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid($category . '_', true) . '.' . $ext;
$filepath = $upload_dir . '/' . $filename;
$relative_path = '/images/uploads/' . $filename;

// Déplacer le fichier
if (!move_uploaded_file($file['tmp_name'], $filepath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erreur lors de la sauvegarde du fichier']);
    exit;
}

// Insérer en base
try {
    $pdo = get_db();
    $stmt = $pdo->prepare("INSERT INTO famaby_images (name, category, file_path, file_size, mime_type, alt_text, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
        $name,
        $category,
        $relative_path,
        $file['size'],
        $file['type'],
        $alt_text,
        $sort_order
    ]);

    $id = $pdo->lastInsertId();

    echo json_encode([
        'success' => true,
        'message' => 'Image uploadée avec succès',
        'data' => [
            'id' => $id,
            'name' => $name,
            'category' => $category,
            'file_path' => $relative_path,
            'file_size' => $file['size'],
            'alt_text' => $alt_text
        ]
    ]);
} catch (PDOException $e) {
    // Supprimer le fichier si l'insertion échoue
    unlink($filepath);
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erreur lors de l\'enregistrement en base']);
}
