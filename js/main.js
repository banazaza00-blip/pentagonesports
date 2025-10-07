// Pentagon Esports Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.team-member, .match-card, .achievement-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    const pentagonLogo = document.querySelector('.pentagon-logo-hero');
    
    if (heroSection && pentagonLogo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < heroSection.offsetHeight) {
                pentagonLogo.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
            }
        });
    }
    
    // Typing animation for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Match cards hover effect with sound simulation
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Team member cards stagger animation
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Achievement cards pulse animation on hover
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.achievement-icon');
            if (icon) {
                icon.style.animation = 'bounce 0.6s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.achievement-icon');
            if (icon) {
                icon.style.animation = 'none';
            }
        });
    });
    
    // Contact links hover effect
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(199, 120, 221, 0.2)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Random particle effects for hero section
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #c778dd;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            animation: particleFloat 4s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        
        if (heroSection) {
            heroSection.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 4000);
        }
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1);
                opacity: 0;
            }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .loaded {
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background: rgba(0, 0, 0, 0.98);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                backdrop-filter: blur(10px);
                padding: 2rem 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu li {
                margin: 1rem 0;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Pentagon Esports website loaded successfully! 🎮');
});