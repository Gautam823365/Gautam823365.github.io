// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = Array.from(navLinks);

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat, .contact-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter animation for stats
const stats = document.querySelectorAll('.stat h3');
const statsSection = document.querySelector('.about-stats');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    const statsSectionTop = statsSection.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight / 5 * 4;
    
    if (statsSectionTop < triggerBottom) {
        hasAnimated = true;
        stats.forEach(stat => {
            const target = stat.innerText;
            const isPlus = target.includes('+');
            const numValue = parseFloat(target);
            const duration = 2000;
            const increment = numValue / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < numValue) {
                    stat.innerText = current.toFixed(1) + (isPlus ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.innerText = target;
                }
            };
            
            updateCounter();
        });
    }
};

window.addEventListener('scroll', animateCounters);

// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Prevent default link behavior for placeholder links
document.addEventListener('DOMContentLoaded', () => {
    // Update GitHub links if needed
    const githubLinks = document.querySelectorAll('a[href*="github.com/gautam-kumar"]');
    githubLinks.forEach(link => {
        // Replace with actual GitHub username
        link.href = link.href.replace('gautam-kumar', 'your-github-username');
    });
    
    // Update LinkedIn link
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com/in/gautam-kumar"]');
    linkedinLinks.forEach(link => {
        // Replace with actual LinkedIn username
        link.href = link.href.replace('gautam-kumar', 'your-linkedin-username');
    });
});

// Console log for developers
console.log('%c Portfolio Website by Gautam Kumar', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c Java Backend Developer | Spring Boot | Microservices', 'color: #64748b; font-size: 14px;');
