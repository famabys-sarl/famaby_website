<?php
// config.example.php — Copié en config.php pendant le déploiement
// NE JAMAIS commiter le vrai config.php

return [
    // ─── SMTP ───
    'smtp_host'     => 'smtp.mail.ovh.net',
    'smtp_port'     => 587,
    'smtp_secure'   => 'tls',
    'smtp_username' => 'contact@famaby.sn',
    'smtp_password' => 'VOTRE_MOT_DE_PASSE_ICI',
    'email_to'      => 'contact@famaby.sn',
    'email_cc'      => 'gerant@famaby.sn',
    'from_name'     => 'FAMABY',

    // ─── MySQL ───
    'db_host' => 'localhost',
    'db_name' => 'famaby',
    'db_user' => 'famaby_user',
    'db_pass' => 'VOTRE_MOT_DE_PASSE_BDD',

    // ─── Admin ───
    'admin_password' => 'CHOISIR_UN_MOT_DE_PASSE_FORT',
    'admin_token'    => 'UN_TOKEN_ALEATOIRE_ICI',
];
