/* ==================================================
   MAIN APPLICATION SCRIPT
   - UI Population
   - Modal Handlers
   - Dynamic Buttons & Event Routing
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Set Footer Year
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // 2. Dynamic Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu on link click
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // 3. Render Services Grid
    const servicesGrid = document.getElementById("services-grid");
    if (servicesGrid && typeof VITHAL_KNOWLEDGE !== "undefined") {
        VITHAL_KNOWLEDGE.services.forEach(service => {
            const card = document.createElement("div");
            card.className = "service-card glass-panel";
            card.innerHTML = `
                <div class="service-icon">
                    <img src="${service.icon}" alt="${service.name}" onerror="this.src='assets/logo.png'">
                </div>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <button class="btn-card-action" onclick="openDetailModal('service', '${service.id}')">
                    Discuss This Service &rarr;
                </button>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 4. Render Manufacturing Products Grid
    const productsGrid = document.getElementById("products-grid");
    if (productsGrid && typeof VITHAL_KNOWLEDGE !== "undefined") {
        VITHAL_KNOWLEDGE.products.forEach(prod => {
            const card = document.createElement("div");
            card.className = "product-card glass-panel";
            card.innerHTML = `
                <span class="product-badge">${prod.category}</span>
                <h3>${prod.name}</h3>
                <p>${prod.description}</p>
                <div class="product-actions">
                    <button class="btn-secondary" onclick="openDetailModal('product', '${prod.id}')">Details</button>
                    <a href="${VITHAL_WHATSAPP.createProductUrl(prod.name)}" target="_blank" rel="noopener noreferrer" class="btn-primary">Enquire</a>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    // 5. Global Modal System
    const modal = document.getElementById("detail-modal");
    const modalClose = document.getElementById("modal-close");

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
            // Close AI window if opened
            const aiContainer = document.getElementById("vithal-ai-container");
            if (aiContainer && !aiContainer.classList.contains("closed")) {
                aiContainer.classList.add("closed");
            }
        }
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        }
    }

    window.openDetailModal = function(type, id) {
        let item = null;
        if (type === "service") {
            item = VITHAL_KNOWLEDGE.services.find(s => s.id === id);
        } else {
            item = VITHAL_KNOWLEDGE.products.find(p => p.id === id);
        }

        if (!item) return;

        document.getElementById("modal-title").textContent = item.name;
        document.getElementById("modal-badge").textContent = item.category || "Service Capability";
        document.getElementById("modal-description").textContent = item.description;
        document.getElementById("modal-scope").textContent = item.scope;
        document.getElementById("modal-best-for").textContent = item.bestFor;

        const benefitsList = document.getElementById("modal-benefits");
        benefitsList.innerHTML = item.benefits.map(b => `<li>${b}</li>`).join("");

        const useCasesList = document.getElementById("modal-use-cases");
        useCasesList.innerHTML = item.useCases.map(u => `<li>${u}</li>`).join("");

        const whatsappBtn = document.getElementById("modal-whatsapp-btn");
        if (type === "service") {
            whatsappBtn.href = VITHAL_WHATSAPP.createServiceUrl(item.name);
        } else {
            whatsappBtn.href = VITHAL_WHATSAPP.createProductUrl(item.name);
        }

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    };

    // 6. Connect Ask AI Buttons
    const triggerAI = () => {
        if (typeof window.openVithalAI === "function") window.openVithalAI();
    };

    const navAiBtn = document.getElementById("nav-ask-ai-btn");
    const heroAiBtn = document.getElementById("hero-ask-ai-btn");
    const contactAiBtn = document.getElementById("contact-ask-ai-btn");

    if (navAiBtn) navAiBtn.addEventListener("click", triggerAI);
    if (heroAiBtn) heroAiBtn.addEventListener("click", triggerAI);
    if (contactAiBtn) contactAiBtn.addEventListener("click", triggerAI);
});
