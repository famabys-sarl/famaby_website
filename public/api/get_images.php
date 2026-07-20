<?php
// get_images.php — Récupérer les images par catégorie
// GET /api/get_images.php?category=hero
// GET /api/get_images.php (toutes les images)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/db.php';

$pdo = get_db();
$category = $_GET['category'] ?? null;
$active_only = isset($_GET['active']);

try {
    if ($category) {
        $stmt = $pdo->prepare("SELECT * FROM famaby_images WHERE category = ? AND is_active = 1 ORDER BY sort_order ASC, created_at DESC");
        $stmt->execute([$category]);
    } else {
        $stmt = $pdo->query("SELECT * FROM famaby_images WHERE is_active = 1 ORDER BY category, sort_order ASC, created_at DESC");
    }
    $images = $stmt->fetchAll();

    echo json_encode(['success' => true, 'data' => $images, 'count' => count($images)]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erreur de requête']);
}
