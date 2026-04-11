// ===== KHALBATTA BITES — INTERACTIVE JS =====

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initScrollProgress();
  initHeaderScroll();
  initScrollReveal();
  setActiveNavLink();

  // Page-specific inits
  if (document.getElementById('products-grid')) renderProducts('products-grid');
  if (document.getElementById('price-cards')) renderPriceCards('price-cards');
});

// ===== MOBILE NAV =====
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  });
}

// ===== HEADER SCROLL =====
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  // check on load
  header.classList.toggle('scrolled', window.scrollY > 50);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===== ACTIVE NAV LINK =====
function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== WHATSAPP =====
function getWhatsAppLink(name, price) {
  const msg = encodeURIComponent(`Hello! I'm interested in ordering ${name} (${price}). Can you help me place an order?`);
  return `https://wa.me/919767188718?text=${msg}`;
}

function openWhatsApp(name, price) {
  window.open(getWhatsAppLink(name, price), '_blank');
}

// ===== LOAD PRODUCTS =====
async function loadProducts() {
  try {
    const res = await fetch('data/products.json');
    return await res.json();
  } catch (e) {
    console.error('Error loading products:', e);
    return [];
  }
}

// ===== RENDER PRODUCTS GRID =====
async function renderProducts(id) {
  const container = document.getElementById(id);
  if (!container) return;

  const products = await loadProducts();
  const badges = ['Bestseller', 'Traditional', 'Premium', 'Popular', 'Classic'];
  const images = {
    'High-Protein Bites': 'high-protein-bites.jpg',
    'Stone-Crushed Thecha': 'thecha.jpg',
    'Pure Cow Ghee': 'ghee.jpg',
    'Dry Peanut Chutney': 'peanut-chutney.jpg',
    'Kolhapuri Achar': 'achar.jpg'
  };

  container.innerHTML = products.map((p, i) => `
    <div class="product-card reveal">
      <div class="product-image">
        <img src="images/${images[p.name] || p.image}" alt="${p.name}" loading="lazy">
        <span class="product-badge">${badges[i] || 'New'}</span>
      </div>
      <div class="product-content">
        <h3>${p.name}</h3>
        <div class="product-specs">
          ${p.weight ? `<span>${p.weight}</span>` : ''}
          ${p.quantity ? `<span>${p.quantity}</span>` : ''}
        </div>
        <div class="product-price">${p.price}</div>
        ${p.pricePerKg ? `<p class="product-price-sub">${p.pricePerKg}</p>` : ''}
        <p class="product-desc">${p.description}</p>
        <button class="btn btn-primary" onclick="openWhatsApp('${p.name}', '${p.price}')">Order on WhatsApp</button>
      </div>
    </div>
  `).join('');

  // Re-observe new elements for scroll reveal
  initScrollReveal();
}

// ===== RENDER PRICE CARDS =====
async function renderPriceCards(id) {
  const container = document.getElementById(id);
  if (!container) return;

  const products = await loadProducts();
  container.innerHTML = products.map(p => `
    <div class="price-card reveal">
      <h3>${p.name}</h3>
      <p class="weight">${p.weight || ''}</p>
      <div class="price">${p.price}${p.pricePerKg ? `<span class="price-sub">${p.pricePerKg}</span>` : ''}</div>
      <a href="${getWhatsAppLink(p.name, p.price)}" target="_blank" class="btn btn-primary" style="width:100%">🛒 Order Now</a>
    </div>
  `).join('');

  initScrollReveal();
}
