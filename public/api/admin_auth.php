<?php
// admin_auth.php — Authentification admin
// POST { "password": "xxx" }

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$config = require __DIR__ . '/config.php';
$input = json_decode(file_get_contents('php://input'), true);
$password = $input['password'] ?? '';

$expected = $config['admin_password'] ?? 'famaby2026';

if ($password === $expected) {
    $token = $config['admin_token'] ?? 'famaby-admin-2026';
    echo json_encode(['success' => true, 'token' => $token]);
} else {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Mot de passe incorrect']);
}
