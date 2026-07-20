<?php
// db.php — Connexion PDO sécurisée
// Ce fichier est chargé par les API, il ne doit jamais être accessible directement

function get_db() {
    static $pdo = null;
    if ($pdo !== null) return $pdo;

    $config = require __DIR__ . '/config.php';

    $host = $config['db_host'] ?? 'localhost';
    $name = $config['db_name'] ?? 'famaby';
    $user = $config['db_user'] ?? 'famaby';
    $pass = $config['db_pass'] ?? '';
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;dbname=$name;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Erreur de connexion à la base de données']);
        exit;
    }

    return $pdo;
}
