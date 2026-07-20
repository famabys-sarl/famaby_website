<?php
// delete_image.php — Supprimer une image
// DELETE /api/delete_image.php?id=1

require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/db.php';

header('Content-Type: application/json');
add_security_headers();

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (preg_match('/famaby\.sn$|localhost/', $origin)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: DELETE, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE' && $_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// Auth
$auth_token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$config = require __DIR__ . '/config.php';
$expected_token = $config['admin_token'] ?? 'famaby-admin-2026';

if ($auth_token !== "Bearer $expected_token") {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Non autorisé']);
    exit;
}

// Récupérer l'ID
$input = json_decode(file_get_contents('php://input'), true);
$id = intval($input['id'] ?? $_GET['id'] ?? 0);

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'ID invalide']);
    exit;
}

try {
    $pdo = get_db();

    // Récupérer le chemin du fichier avant suppression
    $stmt = $pdo->prepare("SELECT file_path FROM famaby_images WHERE id = ?");
    $stmt->execute([$id]);
    $image = $stmt->fetch();

    if (!$image) {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Image non trouvée']);
        exit;
    }

    // Supprimer le fichier physique (seulement pour les uploads locaux)
    $file_path = __DIR__ . '/..' . $image['file_path'];
    if (strpos($image['file_path'], '/uploads/') !== false && file_exists($file_path)) {
        unlink($file_path);
    }

    // Supprimer de la base
    $stmt = $pdo->prepare("DELETE FROM famaby_images WHERE id = ?");
    $stmt->execute([$id]);

    echo json_encode(['success' => true, 'message' => 'Image supprimée avec succès']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erreur lors de la suppression']);
}
