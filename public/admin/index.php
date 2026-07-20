<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>FAMABY — Admin Images</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', system-ui, sans-serif; background: #f0fdf4; color: #1a1a2e; min-height: 100vh; }

        .login-overlay {
            position: fixed; inset: 0; background: linear-gradient(135deg, #1B5E20, #0D3B12);
            display: flex; align-items: center; justify-content: center; z-index: 100;
        }
        .login-box {
            background: white; border-radius: 20px; padding: 48px 40px; width: 400px; max-width: 90vw;
            box-shadow: 0 25px 60px rgba(0,0,0,0.3); text-align: center;
        }
        .login-box h1 { font-size: 28px; font-weight: 900; color: #1B5E20; margin-bottom: 8px; }
        .login-box p { color: #6b7280; font-size: 14px; margin-bottom: 32px; }
        .login-box input {
            width: 100%; padding: 14px 16px; border: 2px solid #e5e7eb; border-radius: 12px;
            font-size: 15px; outline: none; transition: border-color 0.2s;
        }
        .login-box input:focus { border-color: #1B5E20; }
        .login-box button {
            width: 100%; margin-top: 16px; padding: 14px; background: linear-gradient(135deg, #1B5E20, #2E7D32);
            color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 700;
            cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
        }
        .login-box button:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(27,94,32,0.3); }
        .login-error { color: #e53935; font-size: 13px; margin-top: 12px; display: none; }

        header {
            background: linear-gradient(135deg, #1B5E20, #0D3B12); color: white;
            padding: 20px 32px; display: flex; align-items: center; justify-content: space-between;
        }
        header h1 { font-size: 22px; font-weight: 900; }
        header .badge { background: rgba(255,255,255,0.15); padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: 600; }
        header button { background: rgba(255,255,255,0.15); color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; }
        header button:hover { background: rgba(255,255,255,0.25); }

        .container { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }

        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 32px; }
        .stat-card {
            background: white; border-radius: 16px; padding: 20px; text-align: center;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid #e5e7eb;
        }
        .stat-card .number { font-size: 28px; font-weight: 900; color: #1B5E20; }
        .stat-card .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

        .upload-zone {
            background: white; border: 2px dashed #d1d5db; border-radius: 16px; padding: 40px;
            text-align: center; margin-bottom: 32px; transition: all 0.3s; cursor: pointer;
        }
        .upload-zone:hover, .upload-zone.dragover { border-color: #1B5E20; background: #f0fdf4; }
        .upload-zone .icon { font-size: 48px; margin-bottom: 12px; }
        .upload-zone h3 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .upload-zone p { font-size: 13px; color: #6b7280; }
        .upload-zone input { display: none; }

        .upload-form {
            background: white; border-radius: 16px; padding: 24px; margin-bottom: 32px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; display: none;
        }
        .upload-form.visible { display: block; }
        .upload-form h3 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group.full { grid-column: 1 / -1; }
        .form-group label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; }
        .form-group input, .form-group select {
            padding: 10px 14px; border: 2px solid #e5e7eb; border-radius: 10px;
            font-size: 14px; outline: none; transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus { border-color: #1B5E20; }
        .preview-img { width: 100%; max-height: 200px; object-fit: cover; border-radius: 10px; margin-top: 8px; display: none; }
        .btn-upload {
            margin-top: 16px; padding: 12px 28px; background: linear-gradient(135deg, #1B5E20, #2E7D32);
            color: white; border: none; border-radius: 10px; font-size: 14px; font-weight: 700;
            cursor: pointer; transition: all 0.2s;
        }
        .btn-upload:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(27,94,32,0.3); }
        .btn-upload:disabled { opacity: 0.5; cursor: not-allowed; }

        .filter-bar { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
        .filter-btn {
            padding: 8px 16px; border: 2px solid #e5e7eb; border-radius: 50px; font-size: 13px;
            font-weight: 600; cursor: pointer; background: white; transition: all 0.2s;
        }
        .filter-btn:hover { border-color: #1B5E20; color: #1B5E20; }
        .filter-btn.active { background: #1B5E20; color: white; border-color: #1B5E20; }

        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
        .gallery-card {
            background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            border: 1px solid #e5e7eb; transition: all 0.3s;
        }
        .gallery-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
        .gallery-card img { width: 100%; height: 180px; object-fit: cover; }
        .gallery-card .info { padding: 16px; }
        .gallery-card .name { font-weight: 700; font-size: 14px; margin-bottom: 4px; }
        .gallery-card .meta { font-size: 12px; color: #6b7280; display: flex; gap: 8px; align-items: center; }
        .gallery-card .cat-badge {
            display: inline-block; padding: 2px 8px; border-radius: 50px; font-size: 10px;
            font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cat-logo { background: #dcfce7; color: #166534; }
        .cat-hero { background: #dbeafe; color: #1e40af; }
        .cat-partner { background: #fef3c7; color: #92400e; }
        .cat-product { background: #ede9fe; color: #5b21b6; }
        .cat-news { background: #fce7f3; color: #9d174d; }
        .cat-about { background: #ccfbf1; color: #0f766e; }
        .cat-general { background: #f3f4f6; color: #374151; }
        .gallery-card .actions { padding: 0 16px 16px; display: flex; gap: 8px; }
        .btn-sm {
            padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 600;
            border: none; cursor: pointer; transition: all 0.2s;
        }
        .btn-delete { background: #fef2f2; color: #dc2626; }
        .btn-delete:hover { background: #dc2626; color: white; }
        .btn-view { background: #f0fdf4; color: #1B5E20; }
        .btn-view:hover { background: #1B5E20; color: white; }

        .empty { text-align: center; padding: 60px; color: #6b7280; }
        .empty .icon { font-size: 48px; margin-bottom: 12px; }

        .toast {
            position: fixed; bottom: 24px; right: 24px; padding: 14px 20px; border-radius: 12px;
            font-size: 14px; font-weight: 600; z-index: 200; transform: translateY(100px);
            opacity: 0; transition: all 0.3s;
        }
        .toast.show { transform: translateY(0); opacity: 1; }
        .toast.success { background: #1B5E20; color: white; }
        .toast.error { background: #dc2626; color: white; }

        .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
</head>
<body>

<!-- Login -->
<div class="login-overlay" id="loginOverlay">
    <div class="login-box">
        <h1>FAMABY</h1>
        <p>Administration — Gestion des images</p>
        <form id="loginForm">
            <input type="password" id="loginPassword" placeholder="Mot de passe admin" autocomplete="current-password">
            <button type="submit">Se connecter</button>
        </form>
        <div class="login-error" id="loginError">Mot de passe incorrect</div>
    </div>
</div>

<!-- Admin -->
<div id="adminApp" style="display:none;">
    <header>
        <div style="display:flex;align-items:center;gap:12px;">
            <h1>FAMABY Admin</h1>
            <span class="badge">Gestion des images</span>
        </div>
        <button onclick="logout()">Déconnexion</button>
    </header>

    <div class="container">
        <div class="stats" id="statsBar"></div>

        <div class="upload-zone" id="dropZone">
            <div class="icon">📁</div>
            <h3>Glissez une image ici ou cliquez pour sélectionner</h3>
            <p>JPG, PNG, WebP, GIF, SVG — Max 5 Mo</p>
            <input type="file" id="fileInput" accept="image/*">
        </div>

        <div class="upload-form" id="uploadForm">
            <h3>📤 Nouvelle image</h3>
            <img id="previewImg" class="preview-img" alt="Aperçu">
            <div class="form-grid" style="margin-top:16px;">
                <div class="form-group">
                    <label>Nom</label>
                    <input type="text" id="imgName" placeholder="Mon image">
                </div>
                <div class="form-group">
                    <label>Catégorie</label>
                    <select id="imgCategory">
                        <option value="general">Général</option>
                        <option value="logo">Logo</option>
                        <option value="hero">Hero / Slider</option>
                        <option value="partner">Partenaire</option>
                        <option value="product">Produit</option>
                        <option value="news">Actualité</option>
                        <option value="about">À propos</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Texte alternatif (alt)</label>
                    <input type="text" id="imgAlt" placeholder="Description de l'image">
                </div>
                <div class="form-group">
                    <label>Ordre d'affichage</label>
                    <input type="number" id="imgOrder" value="0" min="0">
                </div>
            </div>
            <button class="btn-upload" id="btnUpload" onclick="uploadImage()">⬆️ Uploader</button>
        </div>

        <div class="filter-bar" id="filterBar"></div>
        <div class="gallery" id="gallery"></div>
    </div>
</div>

<div class="toast" id="toast"></div>

<script>
const API = '/api';
let TOKEN = localStorage.getItem('famaby_admin_token') || '';
let allImages = [];
let currentFilter = 'all';
let selectedFile = null;

// ─── Login ───
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pass = document.getElementById('loginPassword').value;
    fetch(`${API}/admin_auth.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pass })
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            TOKEN = data.token;
            localStorage.setItem('famaby_admin_token', TOKEN);
            showAdmin();
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    })
    .catch(() => {
        document.getElementById('loginError').style.display = 'block';
    });
});

function logout() {
    TOKEN = '';
    localStorage.removeItem('famaby_admin_token');
    document.getElementById('adminApp').style.display = 'none';
    document.getElementById('loginOverlay').style.display = 'flex';
}

// ─── Init ───
if (TOKEN) { showAdmin(); }

function showAdmin() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('adminApp').style.display = 'block';
    loadImages();
}

// ─── Load Images ───
async function loadImages() {
    try {
        const res = await fetch(`${API}/get_images.php`);
        const data = await res.json();
        if (data.success) {
            allImages = data.data;
            renderStats();
            renderFilters();
            renderGallery();
        }
    } catch (e) { showToast('Erreur de chargement', 'error'); }
}

function renderStats() {
    const cats = {};
    allImages.forEach(img => { cats[img.category] = (cats[img.category] || 0) + 1; });
    let html = `<div class="stat-card"><div class="number">${allImages.length}</div><div class="label">Total</div></div>`;
    Object.entries(cats).sort((a,b) => b[1] - a[1]).forEach(([cat, count]) => {
        html += `<div class="stat-card"><div class="number">${count}</div><div class="label">${cat}</div></div>`;
    });
    document.getElementById('statsBar').innerHTML = html;
}

function renderFilters() {
    const cats = ['all', ...new Set(allImages.map(i => i.category))];
    const labels = { all: 'Toutes', logo: 'Logos', hero: 'Hero', partner: 'Partenaires', product: 'Produits', news: 'Actus', about: 'À propos', general: 'Général' };
    document.getElementById('filterBar').innerHTML = cats.map(c =>
        `<button class="filter-btn ${c === currentFilter ? 'active' : ''}" onclick="setFilter('${c}')">${labels[c] || c}</button>`
    ).join('');
}

function setFilter(cat) {
    currentFilter = cat;
    renderFilters();
    renderGallery();
}

function renderGallery() {
    const filtered = currentFilter === 'all' ? allImages : allImages.filter(i => i.category === currentFilter);
    if (filtered.length === 0) {
        document.getElementById('gallery').innerHTML = '<div class="empty"><div class="icon">🖼️</div><h3>Aucune image</h3></div>';
        return;
    }
    document.getElementById('gallery').innerHTML = filtered.map(img => `
        <div class="gallery-card">
            <img src="${img.file_path}" alt="${img.alt_text || img.name}" loading="lazy">
            <div class="info">
                <div class="name">${img.name}</div>
                <div class="meta">
                    <span class="cat-badge cat-${img.category}">${img.category}</span>
                    <span>${formatSize(img.file_size)}</span>
                    <span>${img.sort_order}</span>
                </div>
            </div>
            <div class="actions">
                <a href="${img.file_path}" target="_blank" class="btn-sm btn-view">👁 Voir</a>
                <button class="btn-sm btn-delete" onclick="deleteImage(${img.id})">🗑 Supprimer</button>
            </div>
        </div>
    `).join('');
}

// ─── Upload ───
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) selectFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener('change', () => { if (fileInput.files.length) selectFile(fileInput.files[0]); });

function selectFile(file) {
    selectedFile = file;
    document.getElementById('imgName').value = file.name.replace(/\.[^.]+$/, '');
    const preview = document.getElementById('previewImg');
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
    document.getElementById('uploadForm').classList.add('visible');
}

async function uploadImage() {
    if (!selectedFile) return;
    const btn = document.getElementById('btnUpload');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> Upload...';

    const fd = new FormData();
    fd.append('image', selectedFile);
    fd.append('name', document.getElementById('imgName').value);
    fd.append('category', document.getElementById('imgCategory').value);
    fd.append('alt_text', document.getElementById('imgAlt').value);
    fd.append('sort_order', document.getElementById('imgOrder').value);

    try {
        const res = await fetch(`${API}/upload_image.php`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${TOKEN}` },
            body: fd
        });
        const data = await res.json();
        if (data.success) {
            showToast('Image uploadée !', 'success');
            selectedFile = null;
            document.getElementById('uploadForm').classList.remove('visible');
            document.getElementById('previewImg').style.display = 'none';
            fileInput.value = '';
            loadImages();
        } else {
            showToast(data.error || 'Erreur', 'error');
        }
    } catch (e) { showToast('Erreur réseau', 'error'); }

    btn.disabled = false;
    btn.innerHTML = '⬆️ Uploader';
}

async function deleteImage(id) {
    if (!confirm('Supprimer cette image ?')) return;
    try {
        const res = await fetch(`${API}/delete_image.php`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` },
            body: JSON.stringify({ id })
        });
        const data = await res.json();
        if (data.success) {
            showToast('Image supprimée', 'success');
            loadImages();
        } else {
            showToast(data.error || 'Erreur', 'error');
        }
    } catch (e) { showToast('Erreur réseau', 'error'); }
}

function formatSize(bytes) {
    if (!bytes) return '—';
    if (bytes < 1024) return bytes + ' o';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' Ko';
    return (bytes / 1048576).toFixed(1) + ' Mo';
}

function showToast(msg, type) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.classList.remove('show'), 3000);
}
</script>
</body>
</html>
