/* ==================================================
   ANIMATIONS & SCROLL OBSERVERS
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Entry Animation Skip Handler
    const introScreen = document.getElementById("intro-screen");
    const skipBtn = document.getElementById("skip-intro-btn");

    function dismissIntro() {
        if (introScreen && !introScreen.classList.contains("fade-out")) {
            introScreen.classList.add("fade-out");
            document.body.classList.remove("loading-state");
            setTimeout(() => {
                introScreen.style.display = "none";
            }, 800);
        }
    }

    if (skipBtn) {
        skipBtn.addEventListener("click", dismissIntro);
    }

    // Auto dismiss after sequence (approx 3.2s)
    setTimeout(dismissIntro, 3200);

    // 2. Navbar Opacity on Scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Scroll Reveal via IntersectionObserver
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".timeline-step, .why-card, .service-card, .product-card").forEach(el => {
        scrollObserver.observe(el);
    });

    // 4. Ecosystem Connections Drawer (Canvas)
    const ecoCanvas = document.getElementById("eco-canvas");
    if (ecoCanvas) {
        drawEcosystemLines();
        window.addEventListener("resize", drawEcosystemLines);
    }

    function drawEcosystemLines() {
        const center = document.querySelector(".ecosystem-center");
        const nodes = document.querySelectorAll(".eco-node");
        if (!center || !nodes.length) return;

        const parentRect = ecoCanvas.parentElement.getBoundingClientRect();
        ecoCanvas.setAttribute("width", parentRect.width);
        ecoCanvas.setAttribute("height", parentRect.height);

        const centerRect = center.getBoundingClientRect();
        const cX = (centerRect.left + centerRect.width / 2) - parentRect.left;
        const cY = (centerRect.top + centerRect.height / 2) - parentRect.top;

        let svgContent = "";
        nodes.forEach(node => {
            const nRect = node.getBoundingClientRect();
            const nX = (nRect.left + nRect.width / 2) - parentRect.left;
            const nY = (nRect.top + nRect.height / 2) - parentRect.top;

            svgContent += `<line x1="${cX}" y1="${cY}" x2="${nX}" y2="${nY}" stroke="rgba(0, 240, 255, 0.25)" stroke-width="1.5" stroke-dasharray="4" />`;
        });

        ecoCanvas.innerHTML = svgContent;
    }
});
