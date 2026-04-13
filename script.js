/* =====================
   PRODUCT DATA
   ===================== */
const PRODUCTS = [
  {
    id: 1,
    name: 'Oxford Button-Down Shirt',
    category: 'Shirts',
    price: 89,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80'
  },
  {
    id: 2,
    name: 'Slim-Fit Chino Trousers',
    category: 'Trousers',
    price: 119,
    originalPrice: 159,
    rating: 4.7,
    reviews: 186,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80'
  },
  {
    id: 3,
    name: 'Merino Wool Crewneck',
    category: 'Knitwear',
    price: 145,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'
  },
  {
    id: 4,
    name: 'Tailored Blazer',
    category: 'Jackets',
    price: 289,
    originalPrice: 389,
    rating: 4.8,
    reviews: 97,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
  },
  {
    id: 5,
    name: 'Linen Relaxed Shirt',
    category: 'Shirts',
    price: 79,
    originalPrice: null,
    rating: 4.6,
    reviews: 143,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&q=80'
  },
  {
    id: 6,
    name: 'Cargo Utility Trousers',
    category: 'Trousers',
    price: 135,
    originalPrice: null,
    rating: 4.5,
    reviews: 78,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80'
  },
  {
    id: 7,
    name: 'Leather Biker Jacket',
    category: 'Jackets',
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviews: 56,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80'
  },
  {
    id: 8,
    name: 'Classic White T-Shirt',
    category: 'Shirts',
    price: 45,
    originalPrice: null,
    rating: 4.7,
    reviews: 521,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'
  },
  {
    id: 9,
    name: 'Denim Slim Jeans',
    category: 'Trousers',
    price: 129,
    originalPrice: null,
    rating: 4.6,
    reviews: 389,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80'
  },
  {
    id: 10,
    name: 'Cashmere V-Neck Sweater',
    category: 'Knitwear',
    price: 219,
    originalPrice: 279,
    rating: 4.9,
    reviews: 134,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=600&q=80'
  },
  {
    id: 11,
    name: 'Parka Winter Jacket',
    category: 'Jackets',
    price: 329,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80'
  },
  {
    id: 12,
    name: 'Striped Polo Shirt',
    category: 'Shirts',
    price: 65,
    originalPrice: 85,
    rating: 4.5,
    reviews: 167,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80'
  }
];

function getAllProducts() { return PRODUCTS; }
function getFeaturedProducts() { return PRODUCTS.filter(p => p.badge === 'BEST').concat(PRODUCTS.filter(p => p.badge !== 'BEST')).slice(0, 4); }
function getNewArrivals() { return PRODUCTS.filter(p => p.badge === 'NEW').slice(0, 4); }

/* =====================
   PRODUCT CARD RENDER
   ===================== */
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = '<p style="color:#999;grid-column:1/-1;text-align:center;padding:40px">No products found.</p>';
    return;
  }
  container.innerHTML = products.map(p => {
    const badgeMap = { 'NEW': 'badge-new', 'SALE': 'badge-sale', 'BEST': 'badge-best' };
    const badgeLabelMap = { 'NEW': 'New', 'SALE': 'Sale', 'BEST': 'Best Seller' };
    const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : null;
    const stars = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));

    return `
      <div class="product-card">
        <div class="product-image">
          <a href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
          </a>
          <div class="product-badges">
            ${p.badge ? `<span class="badge ${badgeMap[p.badge]}">${badgeLabelMap[p.badge]}</span>` : ''}
          </div>
          <div class="product-actions">
            <button class="product-action-btn" onclick="toggleWishlist(this)" title="Add to Wishlist">&#10084;</button>
            <button class="product-action-btn" onclick="window.location='product.html?id=${p.id}'" title="Quick View">&#128065;</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <a href="product.html?id=${p.id}">
            <div class="product-name">${p.name}</div>
          </a>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-price">
            <span class="price-current">$${p.price}</span>
            ${p.originalPrice ? `<span class="price-original">$${p.originalPrice}</span>` : ''}
            ${discount ? `<span class="price-discount">-${discount}%</span>` : ''}
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
}

/* =====================
   CART MANAGEMENT
   ===================== */
function getCart() {
  try { return JSON.parse(localStorage.getItem('manorCart')) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('manorCart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, size = 'M', color = 'Black') {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size && i.color === color);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    cart.push({ id: productId, price: product.price, qty: 1, size, color });
  }
  saveCart(cart);
  showToast('Added to cart!', 'success');
  updateCartSidebarItems();
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartSidebarItems();
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    if (item.qty === 0) {
      return removeFromCart(productId);
    }
  }
  saveCart(cart);
  updateCartSidebarItems();
}

function updateCartUI() {
  const cart = getCart();
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount, #cartItemCount').forEach(el => {
    el.textContent = totalItems;
  });
}

function updateCartSidebarItems() {
  const cart = getCart();
  const container = document.getElementById('cartSidebarItems');
  const footer = document.getElementById('cartSidebarFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-sidebar-empty">
        <div class="empty-icon">&#128722;</div>
        <p>Your cart is empty</p>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (document.getElementById('cartSidebarTotal')) {
    document.getElementById('cartSidebarTotal').textContent = '$' + total.toFixed(2);
  }

  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="sidebar-cart-item">
        <a href="product.html?id=${p.id}" class="sidebar-item-img">
          <img src="${p.image}" alt="${p.name}" />
        </a>
        <div class="sidebar-item-details">
          <div class="sidebar-item-name">${p.name}</div>
          <div class="sidebar-item-variant">Size: ${item.size} &bull; Qty: ${item.qty}</div>
          <div class="sidebar-item-price">$${(p.price * item.qty).toFixed(2)}</div>
        </div>
        <button class="sidebar-item-remove" onclick="removeFromCart(${item.id}); updateCartSidebarItems();" title="Remove">&#10005;</button>
      </div>
    `;
  }).join('');
}

/* =====================
   CART SIDEBAR TOGGLE
   ===================== */
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateCartSidebarItems();
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

/* =====================
   TOAST NOTIFICATIONS
   ===================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '&#10003;' : '&#9888;'}</span>${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* =====================
   WISHLIST
   ===================== */
function toggleWishlist(btn) {
  btn.classList.toggle('wishlisted');
  const isWishlisted = btn.classList.contains('wishlisted');
  btn.style.color = isWishlisted ? '#e53935' : '';
  showToast(isWishlisted ? 'Added to wishlist!' : 'Removed from wishlist', isWishlisted ? 'success' : 'success');
}

/* =====================
   NEWSLETTER
   ===================== */
function handleNewsletter(e) {
  e.preventDefault();
  showToast('You\'re subscribed! Welcome to the MANOR inner circle.', 'success');
  e.target.reset();
}

/* =====================
   MOBILE MENU
   ===================== */
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.background = '#fff';
  nav.style.padding = '24px';
  nav.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
  nav.style.zIndex = '999';
}

/* =====================
   INIT
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateCartSidebarItems();
});
