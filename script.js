// Existing scroll animation
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");

            const bars = sec.querySelectorAll(".progress");
            bars.forEach(bar => {
                const width = bar.getAttribute("data-width");
                if (width) bar.style.width = width;
            });
        }
    });
});

// Theme toggle button
const toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            toggle.innerText = "☀️";
        } else {
            toggle.innerText = "🌙";
        }
    });
}

// Nav link highlight
const navLinks = document.querySelectorAll(".nav-links a");
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const menuBtn = document.querySelector(".menu-toggle");
            const navMenu = document.querySelector(".nav-links");
            if (menuBtn && navMenu && window.innerWidth <= 900) {
                navMenu.classList.remove("active");
            }
        });
    });

    const hash = window.location.hash;
    if (hash) {
        const activeLink = document.querySelector(`.nav-links a[href="${hash}"]`);
        if (activeLink) {
            navLinks.forEach(l => l.classList.remove("active"));
            activeLink.classList.add("active");
        }
    }
}

// Mobile hamburger menu controls
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

if (menuClose && navMenu) {
    menuClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}

// Typing animation
const texts = ["Data analytics enthusiast", "Web Developer", "UI/UX Enthusiast"];
let idxText = 0;
let idxChar = 0;
let isDeleting = false;

function type() {
    const typingElem = document.getElementById("typing");
    if (!typingElem) return;

    const currentText = texts[idxText];

    if (isDeleting) {
        typingElem.textContent = currentText.substring(0, idxChar--);
    } else {
        typingElem.textContent = currentText.substring(0, idxChar++);
    }

    if (!isDeleting && idxChar === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && idxChar === -1) {
        isDeleting = false;
        idxText = (idxText + 1) % texts.length;
        idxChar = 0;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

// Contact form success message
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", () => {
        const success = document.getElementById("success");
        if (success) success.style.display = "block";
    });
}