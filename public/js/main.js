// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Change icon
    const icon = menuBtn.querySelector('i');
    if (menuBtn.classList.contains('active')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('ri-close-line');
        menuBtn.querySelector('i').classList.add('ri-menu-line');
    });
});

// Product Data
const products = [
    {
        id: 1,
        name: 'Oversized Blazer',
        category: 'Women',
        price: 299,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400'
    },
    {
        id: 2,
        name: 'Linen Shirt',
        category: 'Men',
        price: 189,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1598033121414-5e17e4742d8f?w=400'
    },
    {
        id: 3,
        name: 'Leather Tote',
        category: 'Accessories',
        price: 399,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400'
    },
    {
        id: 4,
        name: 'Silk Dress',
        category: 'Women',
        price: 259,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400'
    },
    {
        id: 5,
        name: 'Sneakers',
        category: 'Footwear',
        price: 159,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400'
    },
    {
        id: 6,
        name: 'Wool Coat',
        category: 'Men',
        price: 449,
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400',
        hoverImage: 'https://images.unsplash.com/photo-1592878901335-5135702594f9?w=400'
    }
];

// Load Products
function loadProducts() {
    const collectionGrid = document.getElementById('collectionGrid');
    if (!collectionGrid) return;

    collectionGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-overlay">
                    <div class="product-actions">
                        <button class="action-btn" onclick="quickView(${product.id})">
                            <i class="ri-eye-line"></i>
                        </button>
                        <button class="action-btn" onclick="addToCart(${product.id})">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
            </div>
        </div>
    `).join('');

    // Add hover effect for image swap
    document.querySelectorAll('.product-card').forEach((card, index) => {
        const img = card.querySelector('.product-img');
        const originalSrc = products[index].image;
        const hoverSrc = products[index].hoverImage;

        card.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });

        card.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });
}

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartBadge();
        showNotification(`${product.name} added to cart!`);
    }
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = cart.length;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="ri-checkbox-circle-line"></i>
        <span>${message}</span>
    `;

    // Style notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '50px';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '10px';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease';
    notification.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`Quick view: ${product.name}`);
        // In a real app, this would open a modal with product details
    }
}

// Search functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    showNotification('Search feature coming soon!');
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        showNotification(`Thanks for subscribing with ${email}!`);
        newsletterForm.reset();
    });
}

// Contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartBadge();

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});