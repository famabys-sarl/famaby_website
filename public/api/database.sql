-- =============================================
-- FAMABY — Base de données images
-- Exécuter via phpMyAdmin sur OVH
-- =============================================

CREATE TABLE IF NOT EXISTS `famaby_images` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `category` ENUM('logo', 'hero', 'partner', 'product', 'news', 'about', 'general') NOT NULL DEFAULT 'general',
    `file_path` VARCHAR(500) NOT NULL,
    `file_size` INT DEFAULT 0,
    `mime_type` VARCHAR(100) DEFAULT 'image/jpeg',
    `alt_text` VARCHAR(255) DEFAULT '',
    `sort_order` INT DEFAULT 0,
    `is_active` TINYINT(1) DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_category` (`category`),
    INDEX `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertion des images par défaut (Unsplash URLs existantes)
INSERT INTO `famaby_images` (`name`, `category`, `file_path`, `alt_text`, `sort_order`) VALUES
('Slide Pétrole', 'hero', 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=85', 'Raffinerie pétrolière', 1),
('Slide Terrains', 'hero', 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85', 'Paysage de terrains', 2),
('Slide Agriculture', 'hero', 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=85', 'Champ agricole', 3),
('Slide Construction', 'hero', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85', 'Chantier de construction', 4),
('Slide Bitume', 'hero', 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=1920&q=85', 'Route en bitume', 5);
