<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/helpers.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailHelper {
    private $config;

    public function __construct() {
        $this->config = require __DIR__ . '/config.php';
    }

    private function createMail(): PHPMailer {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $this->config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->config['smtp_username'];
        $mail->Password = $this->config['smtp_password'];
        $mail->SMTPSecure = $this->config['smtp_secure'];
        $mail->Port = $this->config['smtp_port'];
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        $mail->Timeout = 15;
        $mail->SMTPKeepAlive = false;

        if (!empty($this->config['smtp_debug'])) {
            $mail->SMTPDebug = $this->config['smtp_debug'];
            $mail->Debugoutput = function($str, $level) {
                error_log("SMTP DEBUG [$level]: $str");
            };
        }

        if (!empty($this->config['dkim_domain']) && !empty($this->config['dkim_private_key'])) {
            $mail->DKIM_domain = $this->config['dkim_domain'];
            $mail->DKIM_private = $this->config['dkim_private_key'];
            $mail->DKIM_selector = $this->config['dkim_selector'] ?? 'default';
            $mail->DKIM_passphrase = $this->config['dkim_passphrase'] ?? '';
            $mail->DKIM_identity = $this->config['smtp_username'];
        }

        return $mail;
    }

    public function sendContactEmail(array $data): bool {
        $mail = $this->createMail();

        $mail->setFrom($this->config['smtp_username'], $this->config['from_name']);
        $mail->addAddress($this->config['email_to']);
        if (!empty($this->config['email_cc'])) {
            $mail->addCC($this->config['email_cc']);
        }
        $mail->addReplyTo($data['email'], $data['prenom'] . ' ' . $data['nom']);

        $mail->isHTML(true);
        $mail->Subject = "📩 Nouveau message de contact — " . $data['prenom'] . ' ' . $data['nom'];
        $mail->AltBody = $this->buildContactText($data);
        $mail->Body = $this->buildContactHtml($data);

        $mail->send();
        return true;
    }

    public function sendContactAutoReply(array $data): bool {
        $mail = $this->createMail();

        $mail->setFrom($this->config['smtp_username'], $this->config['from_name']);
        $mail->addAddress($data['email']);
        $mail->addReplyTo($this->config['email_to'], $this->config['from_name']);

        $mail->isHTML(true);
        $mail->Subject = "✅ Confirmation — Votre message a bien été envoyé";
        $mail->AltBody = $this->buildContactAutoReplyText($data);
        $mail->Body = $this->buildContactAutoReplyHtml($data);

        $mail->send();
        return true;
    }

    public function sendDevisEmail(array $data): bool {
        $mail = $this->createMail();

        $mail->setFrom($this->config['smtp_username'], $this->config['from_name']);
        $mail->addAddress($this->config['email_to']);
        if (!empty($this->config['email_cc'])) {
            $mail->addCC($this->config['email_cc']);
        }
        $mail->addReplyTo($data['email'], $data['nom'] . ' (' . $data['entreprise'] . ')');

        $mail->isHTML(true);
        $mail->Subject = "📋 Demande de devis — " . $data['nom'] . ' (' . $data['entreprise'] . ')';
        $mail->AltBody = $this->buildDevisText($data);
        $mail->Body = $this->buildDevisHtml($data);

        $mail->send();
        return true;
    }

    public function sendDevisAutoReply(array $data): bool {
        $mail = $this->createMail();

        $mail->setFrom($this->config['smtp_username'], $this->config['from_name']);
        $mail->addAddress($data['email']);
        $mail->addReplyTo($this->config['email_to'], $this->config['from_name']);

        $mail->isHTML(true);
        $mail->Subject = "✅ Confirmation — Votre demande de devis a bien été envoyée";
        $mail->AltBody = $this->buildDevisAutoReplyText($data);
        $mail->Body = $this->buildDevisAutoReplyHtml($data);

        $mail->send();
        return true;
    }

    // ─── Contact admin email ───
    private function buildContactHtml(array $d): string {
        $name = $d['prenom'] . ' ' . $d['nom'];
        $date = date('d/m/Y \à H:i');
        return $this->wrapEmail('#1B5E20', '#2E7D32', '📩 Nouveau message de contact', '#f0fdf4', '
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding:14px 18px;background-color:#f0fdf4;border-radius:12px;border:1px solid #dcfce7;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Nom complet</div>
                  <div style="font-size:16px;color:#111827;font-weight:bold;">' . $this->esc($name) . '</div>
                </td>
                <td width="50%" style="padding:14px 18px;background-color:#f0fdf4;border-radius:12px;border:1px solid #dcfce7;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Téléphone</div>
                  <div style="font-size:16px;color:#111827;font-weight:bold;">' . $this->esc($d['telephone']) . '</div>
                </td>
              </tr>
              <tr><td colspan="2" style="height:12px;"></td></tr>
              <tr>
                <td colspan="2" style="padding:14px 18px;background-color:#f0fdf4;border-radius:12px;border:1px solid #dcfce7;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Email</div>
                  <div style="font-size:16px;color:#1B5E20;font-weight:bold;"><a href="mailto:' . $this->esc($d['email']) . '" style="color:#1B5E20;text-decoration:none;">' . $this->esc($d['email']) . '</a></div>
                </td>
              </tr>
            </table>
            <div style="margin:28px 0;border-top:2px solid #e5e7eb;"></div>
            <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:14px;font-weight:600;">Message</div>
            <div style="background-color:#f9fafb;border-left:4px solid #1B5E20;padding:22px;border-radius:0 12px 12px 0;font-size:14px;color:#374151;line-height:1.8;">
              ' . nl2br($this->esc($d['message'])) . '
            </div>
        ', $date, 'Contact');
    }

    private function buildContactText(array $d): string {
        return "Nouveau message de contact\n\nNom: {$d['prenom']} {$d['nom']}\nTéléphone: {$d['telephone']}\nEmail: {$d['email']}\n\nMessage:\n{$d['message']}\n\n---\nEnvoyé depuis le formulaire de contact FAMABY — " . date('d/m/Y à H:i');
    }

    // ─── Contact auto-reply ───
    private function buildContactAutoReplyHtml(array $d): string {
        $name = $d['prenom'] . ' ' . $d['nom'];
        return $this->wrapEmail('#1B5E20', '#2E7D32', '✅ Message bien reçu', '#f0fdf4', '
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">Bonjour <strong>' . $this->esc($d['prenom']) . '</strong>,</p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">Nous avons bien reçu votre message. Notre équipe vous répondra dans les <strong>meilleurs délais</strong>.</p>
            <div style="background-color:#f0fdf4;border-left:4px solid #1B5E20;padding:20px;border-radius:0 12px 12px 0;margin:24px 0;">
              <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;font-weight:600;">Récapitulatif</div>
              <div style="font-size:14px;color:#374151;line-height:1.8;">
                <strong>Message :</strong> ' . $this->esc(substr($d['message'], 0, 200)) . (strlen($d['message']) > 200 ? '...' : '') . '
              </div>
            </div>
            <p style="font-size:14px;color:#6b7280;line-height:1.7;margin:0;">Besoin d\'une réponse urgente ? Appelez-nous au <strong style="color:#1B5E20;">+221 33 865 37 33</strong></p>
        ', date('d/m/Y à H:i'), 'FAMABY');
    }

    private function buildContactAutoReplyText(array $d): string {
        return "Bonjour {$d['prenom']},\n\nNous avons bien reçu votre message. Notre équipe vous répondra dans les meilleurs délais.\n\nRécapitulatif de votre message :\n" . substr($d['message'], 0, 200) . "\n\nBesoin d'une réponse urgente ? Appelez-nous au +221 33 865 37 33\n\nFAMABY — " . date('d/m/Y à H:i');
    }

    // ─── Devis admin email ───
    private function buildDevisHtml(array $d): string {
        $date = date('d/m/Y \à H:i');
        return $this->wrapEmail('#E65100', '#F57C00', '📋 Nouvelle demande de devis', '#fff7ed', '
            <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px;font-weight:600;">👤 Informations client</div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding:14px 18px;background-color:#fff7ed;border-radius:12px;border:1px solid #fed7aa;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Nom complet</div>
                  <div style="font-size:16px;color:#111827;font-weight:bold;">' . $this->esc($d['nom']) . '</div>
                </td>
                <td width="50%" style="padding:14px 18px;background-color:#fff7ed;border-radius:12px;border:1px solid #fed7aa;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Entreprise</div>
                  <div style="font-size:16px;color:#111827;font-weight:bold;">' . $this->esc($d['entreprise']) . '</div>
                </td>
              </tr>
              <tr><td colspan="2" style="height:10px;"></td></tr>
              <tr>
                <td width="50%" style="padding:14px 18px;background-color:#fff7ed;border-radius:12px;border:1px solid #fed7aa;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Téléphone</div>
                  <div style="font-size:16px;color:#111827;font-weight:bold;">' . $this->esc($d['telephone']) . '</div>
                </td>
                <td width="50%" style="padding:14px 18px;background-color:#fff7ed;border-radius:12px;border:1px solid #fed7aa;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Email</div>
                  <div style="font-size:16px;color:#E65100;font-weight:bold;"><a href="mailto:' . $this->esc($d['email']) . '" style="color:#E65100;text-decoration:none;">' . $this->esc($d['email']) . '</a></div>
                </td>
              </tr>
            </table>
            <div style="margin:28px 0;border-top:2px solid #e5e7eb;"></div>
            <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px;font-weight:600;">📦 Détails de la demande</div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="33%" style="padding:16px;background-color:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Produit</div>
                  <div style="font-size:14px;color:#111827;font-weight:bold;">' . $this->esc($d['produit']) . '</div>
                </td>
                <td style="width:12px;"></td>
                <td width="33%" style="padding:16px;background-color:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Quantité</div>
                  <div style="font-size:14px;color:#111827;font-weight:bold;">' . $this->esc($d['quantite']) . '</div>
                </td>
                <td style="width:12px;"></td>
                <td width="33%" style="padding:16px;background-color:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
                  <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:600;">Ville</div>
                  <div style="font-size:14px;color:#111827;font-weight:bold;">' . $this->esc($d['ville']) . '</div>
                </td>
              </tr>
            </table>' .
            (!empty($d['commentaire']) ? '
            <div style="margin:28px 0;border-top:2px solid #e5e7eb;"></div>
            <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;font-weight:600;">💬 Commentaire</div>
            <div style="background-color:#f9fafb;border-left:4px solid #F57C00;padding:22px;border-radius:0 12px 12px 0;font-size:14px;color:#374151;line-height:1.8;">
              ' . nl2br($this->esc($d['commentaire'])) . '
            </div>' : '')
        , $date, 'Devis');
    }

    private function buildDevisText(array $d): string {
        $text = "Demande de devis\n\n";
        $text .= "Nom: {$d['nom']}\nEntreprise: {$d['entreprise']}\nTéléphone: {$d['telephone']}\nEmail: {$d['email']}\n";
        $text .= "Produit: {$d['produit']}\nQuantité: {$d['quantite']}\nVille: {$d['ville']}\n";
        if (!empty($d['commentaire'])) $text .= "\nCommentaire:\n{$d['commentaire']}\n";
        $text .= "\n---\nEnvoyé depuis le formulaire de devis FAMABY — " . date('d/m/Y à H:i');
        return $text;
    }

    // ─── Devis auto-reply ───
    private function buildDevisAutoReplyHtml(array $d): string {
        return $this->wrapEmail('#E65100', '#F57C00', '✅ Demande de devis bien reçue', '#fff7ed', '
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">Bonjour <strong>' . $this->esc($d['nom']) . '</strong>,</p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">Votre demande de devis pour <strong>' . $this->esc($d['produit']) . '</strong> a bien été transmise à notre équipe commerciale.</p>
            <div style="background-color:#fff7ed;border-left:4px solid #F57C00;padding:20px;border-radius:0 12px 12px 0;margin:24px 0;">
              <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;font-weight:600;">Récapitulatif</div>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#374151;line-height:1.8;">
                <tr><td style="padding:4px 0;color:#6b7280;width:120px;">Produit</td><td style="padding:4px 0;font-weight:600;">' . $this->esc($d['produit']) . '</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Quantité</td><td style="padding:4px 0;font-weight:600;">' . $this->esc($d['quantite']) . '</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Ville</td><td style="padding:4px 0;font-weight:600;">' . $this->esc($d['ville']) . '</td></tr>
              </table>
            </div>
            <p style="font-size:14px;color:#6b7280;line-height:1.7;margin:0 0 8px;">Un commercial vous contactera sous <strong style="color:#E65100;">24 à 48 heures</strong>.</p>
            <p style="font-size:14px;color:#6b7280;line-height:1.7;margin:0;">Besoin d\'une réponse urgente ? Appelez-nous au <strong style="color:#E65100;">+221 33 865 37 33</strong></p>
        ', date('d/m/Y à H:i'), 'FAMABY');
    }

    private function buildDevisAutoReplyText(array $d): string {
        return "Bonjour {$d['nom']},\n\nVotre demande de devis pour {$d['produit']} a bien été transmise à notre équipe commerciale.\n\nProduit: {$d['produit']}\nQuantité: {$d['quantite']}\nVille: {$d['ville']}\n\nUn commercial vous contactera sous 24 à 48 heures.\nBesoin d'une réponse urgente ? Appelez-nous au +221 33 865 37 33\n\nFAMABY — " . date('d/m/Y à H:i');
    }

    // ─── Shared email wrapper ───
    private function wrapEmail(string $gradFrom, string $gradTo, string $title, string $bgColor, string $content, string $date, string $badge): string {
        $badgeColors = [
            'Contact' => 'background-color:rgba(255,255,255,0.15);',
            'Devis' => 'background-color:rgba(255,255,255,0.15);',
        ];
        $bc = $badgeColors[$badge] ?? 'background-color:rgba(255,255,255,0.15);';
        $badgeEmoji = $badge === 'Contact' ? '📩' : '📋';

        return '<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:' . $bgColor . ';font-family:\'Segoe UI\',Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:' . $bgColor . ';padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,' . $gradFrom . ',' . $gradTo . ');padding:36px 44px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:2px;">FAMABY</div>
                  <div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:6px;text-transform:uppercase;letter-spacing:1.5px;">' . $title . '</div>
                </td>
                <td align="right">
                  <div style="' . $bc . 'border-radius:50px;padding:8px 18px;display:inline-block;">
                    <span style="color:#ffffff;font-size:12px;font-weight:600;">' . $badgeEmoji . ' ' . $badge . '</span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Content -->
        <tr>
          <td style="padding:36px 44px;">
            ' . $content . '
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#f9fafb;padding:24px 44px;border-top:1px solid #e5e7eb;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;color:#9ca3af;">Envoyé depuis le site <strong>famaby.sn</strong></span>
                </td>
                <td align="right">
                  <span style="font-size:11px;color:#9ca3af;">' . $date . '</span>
                </td>
              </tr>
            </table>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid #e5e7eb;">
              <span style="font-size:10px;color:#9ca3af;">FAMABY — 37 Avenue Cheikh Anta Diop, Immeubles Palazzo Suite, 5e étage, Dakar — +221 33 865 37 33</span>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>';
    }

    private function esc(string $value): string {
        return htmlspecialchars(trim($value), ENT_QUOTES, 'UTF-8');
    }
}
