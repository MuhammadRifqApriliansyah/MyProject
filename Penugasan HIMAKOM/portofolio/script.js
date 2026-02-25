document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
});


const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    // Navbar background effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Animate elements on scroll
    animateOnScroll();
    
    // Animate skill progress bars
    animateSkillBars();
});

// Back to top functionality
backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

const typingText = document.querySelector('.typing-text');
const texts = [
    'Mahasiswa Teknik Komputer',
    'Beginner Programmer',
    'IoT Enggineer',
    'Beginner Frontend Developer',
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

function animateOnScroll() {
    const elements = document.querySelectorAll('.section-header, .skill-card, .tugas-item, .portofolio-card, .kontak-card, .detail-item');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        }
    });
}

// Initialize elements for animation
function initScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .skill-card, .tugas-item, .portofolio-card, .kontak-card, .detail-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
}

initScrollAnimations();

function animateSkillBars() {
    const skillSection = document.getElementById('skill');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (!skillSection) return;
    
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress', progress + '%');
            bar.classList.add('animate');
        });
    }
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(element) {
    const img = element.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on clicking outside image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeFileModal();
        closeVideoModal();
    }
});


const fileModal = document.getElementById('fileModal');
const fileModalBody = document.getElementById('fileModalBody');

function showFileModal(type) {
    fileModalBody.innerHTML = '';
    
    if (type === 'pdf') {
        fileModalBody.innerHTML = `
            <div class="file-preview-large pdf">
                <i class="fas fa-file-pdf"></i>
            </div>
            <h3>Laporan Praktikum Pemrograman Dasar</h3>
            <p>File PDF - 2.5 MB</p>
            <p style="margin-top: 20px; color: var(--text-secondary);">
                Ini adalah preview file PDF. Dalam implementasi nyata, 
                file PDF akan ditampilkan menggunakan PDF viewer atau 
                bisa diunduh untuk dilihat.
            </p>
            <a href="#" class="btn btn-primary" style="margin-top: 20px;">
                <i class="fas fa-download"></i> Unduh File
            </a>
        `;
    } else if (type === 'doc') {
        fileModalBody.innerHTML = `
            <div class="file-preview-large doc">
                <i class="fas fa-file-word"></i>
            </div>
            <h3>Dokumen Tugas Rangkuman</h3>
            <p>File DOCX - 1.2 MB</p>
            <p style="margin-top: 20px; color: var(--text-secondary);">
                Ini adalah preview file Word. Dalam implementasi nyata, 
                file dapat diunduh atau dibuka menggunakan Microsoft Word 
                atau aplikasi compatible.
            </p>
            <a href="#" class="btn btn-primary" style="margin-top: 20px;">
                <i class="fas fa-download"></i> Unduh File
            </a>
        `;
    }
    
    fileModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFileModal() {
    fileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

function playVideo(element) {
    // Using a sample YouTube video for demo
    // In real implementation, replace with actual video URL
    videoFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    videoModal.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const cards = document.querySelectorAll('.skill-card, .portofolio-card, .kontak-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const particles = document.getElementById('particles');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (particles && scrolled < window.innerHeight) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS via JS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

function animateCounter() {
    const counter = document.querySelector('.exp-number');
    if (!counter) return;
    
    const target = parseInt(counter.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };
    
    // Start animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(counter);
}

animateCounter();

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => {
    observer.observe(el);
});

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(function() {
    // Scroll-based animations already handled above
}, 16);

window.addEventListener('scroll', optimizedScroll);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('.particle').forEach(p => p.style.display = 'none');
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-normal', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}
