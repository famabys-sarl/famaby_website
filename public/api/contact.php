<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/helpers.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
    echo json_encode(['success' => false, 'error' => 'Methode non autorisee']);
    exit;
}

if (!check_rate_limit('contact', 5, 300)) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Trop de tentatives. Reessayez dans 5 minutes.']);
    exit;
}

$config = require __DIR__ . '/config.php';
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Donnees invalides']);
    exit;
}

$nom = sanitize($input['nom'] ?? '');
$prenom = sanitize($input['prenom'] ?? '');
$telephone = sanitize($input['telephone'] ?? '');
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = sanitize($input['message'] ?? '');

if (empty($nom) || empty($prenom) || empty($telephone) || !$email || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Tous les champs obligatoires doivent etre remplis']);
    exit;
}

if (strlen($nom) > 100 || strlen($prenom) > 100 || strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Donnees trop longues']);
    exit;
}

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($config['smtp_username'], $config['from_name']);
    $mail->addAddress($config['email_to']);
    $mail->addReplyTo($email, "$prenom $nom");

    $mail->isHTML(true);
    $mail->Subject = "Nouveau message de contact - $prenom $nom";
    $mail->AltBody = "Nom: $nom\nPrenom: $prenom\nTelephone: $telephone\nEmail: $email\n\nMessage:\n$message";
    $mail->Body = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f0fdf4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#1B5E20,#2E7D32);padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:24px;font-weight:bold;color:#ffffff;letter-spacing:1px;">FAMABY</div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;">Nouveau message de contact</div>
                </td>
                <td align="right">
                  <div style="background-color:rgba(255,255,255,0.15);border-radius:50px;padding:8px 16px;display:inline-block;">
                    <span style="color:#ffffff;font-size:12px;">📩 Contact</span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding:12px 16px;background-color:#f0fdf4;border-radius:10px;border:1px solid #dcfce7;">
                  <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Nom complet</div>
                  <div style="font-size:15px;color:#111827;font-weight:bold;">' . $prenom . ' ' . $nom . '</div>
                </td>
                <td width="50%" style="padding:12px 16px;background-color:#f0fdf4;border-radius:10px;border:1px solid #dcfce7;">
                  <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Telephone</div>
                  <div style="font-size:15px;color:#111827;font-weight:bold;">' . $telephone . '</div>
                </td>
              </tr>
              <tr><td colspan="2" style="height:12px;"></td></tr>
              <tr>
                <td colspan="2" style="padding:12px 16px;background-color:#f0fdf4;border-radius:10px;border:1px solid #dcfce7;">
                  <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Email</div>
                  <div style="font-size:15px;color:#1B5E20;font-weight:bold;">' . $email . '</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px;">
            <div style="border-top:2px solid #e5e7eb;"></div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 32px;">
            <div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Message</div>
            <div style="background-color:#f9fafb;border-left:4px solid #1B5E20;padding:20px;border-radius:0 10px 10px 0;font-size:14px;color:#374151;line-height:1.7;">
              ' . nl2br($message) . '
            </div>
          </td>
        </tr>
        <tr>
          <td style="background-color:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;color:#9ca3af;">Envoye depuis le formulaire de contact FAMABY</span>
                </td>
                <td align="right">
                  <span style="font-size:11px;color:#9ca3af;">' . date('d/m/Y à H:i') . '</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>';

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message envoye avec succes']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => "Erreur d'envoi"]);
}
