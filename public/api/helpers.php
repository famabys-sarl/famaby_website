<?php
function get_client_ip() {
    $keys = ['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR'];
    foreach ($keys as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = explode(',', $_SERVER[$key])[0];
            return trim($ip);
        }
    }
    return '0.0.0.0';
}

function check_rate_limit($action, $max_attempts = 5, $window_seconds = 300) {
    $ip = get_client_ip();
    $log_dir = __DIR__ . '/logs/rate_limit';
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    $log_file = $log_dir . '/' . md5($ip . $action) . '.json';
    $attempts = [];
    if (file_exists($log_file)) {
        $attempts = json_decode(file_get_contents($log_file), true) ?? [];
    }
    $now = time();
    $attempts = array_filter($attempts, fn($t) => ($now - $t) < $window_seconds);
    if (count($attempts) >= $max_attempts) {
        return false;
    }
    $attempts[] = $now;
    file_put_contents($log_file, json_encode($attempts));
    return true;
}

function sanitize($value) {
    return htmlspecialchars(trim($value ?? ''), ENT_QUOTES, 'UTF-8');
}

function sanitize_html($value) {
    return htmlspecialchars(trim($value ?? ''), ENT_QUOTES, 'UTF-8');
}

function add_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
}

function is_valid_origin() {
    $allowed = ['famaby.sn', 'www.famaby.sn', 'localhost'];
    $origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
    foreach ($allowed as $domain) {
        if (strpos($origin, $domain) !== false) {
            return true;
        }
    }
    return empty($origin);
}
