/* ==================================================
   VITHAL AI FRONTEND ASSISTANT
   Supports: English, Hindi, Hinglish, Marathi
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const aiContainer = document.getElementById("vithal-ai-container");
    const aiTriggerBtn = document.getElementById("ai-trigger-btn");
    const aiCloseBtn = document.getElementById("ai-close-btn");
    const aiMessagesList = document.getElementById("ai-messages-list");
    const aiForm = document.getElementById("ai-input-form");
    const aiInput = document.getElementById("ai-input-field");
    const quickActions = document.getElementById("ai-quick-actions");

    let isInitialized = false;

    // Toggle Chat Window
    function toggleChat() {
        const isClosed = aiContainer.classList.contains("closed");
        if (isClosed) {
            aiContainer.classList.remove("closed");
            document.getElementById("ai-chat-window").setAttribute("aria-hidden", "false");
            if (!isInitialized) {
                sendBotGreeting();
                isInitialized = true;
            }
            aiInput.focus();
        } else {
            aiContainer.classList.add("closed");
            document.getElementById("ai-chat-window").setAttribute("aria-hidden", "true");
        }
    }

    aiTriggerBtn.addEventListener("click", toggleChat);
    aiCloseBtn.addEventListener("click", toggleChat);

    // Initial Welcome Message
    function sendBotGreeting() {
        const greeting = `Hello! 👋\nI'm Vithal AI, the intelligent assistant of Vithal Technology.\n\nI can help you explore our services, products and technology solutions.`;
        appendMessage(greeting, "bot");
    }

    // Append Message to UI
    function appendMessage(text, sender) {
        const bubble = document.createElement("div");
        bubble.classList.add("message-bubble", sender);
        bubble.innerText = text;
        aiMessagesList.appendChild(bubble);
        aiMessagesList.scrollTop = aiMessagesList.scrollHeight;
    }

    // Process User Query
    function handleUserSubmission(text) {
        const query = text.trim();
        if (!query) return;

        appendMessage(query, "user");
        aiInput.value = "";

        // Simulated processing typing pause
        setTimeout(() => {
            const response = processQueryIntent(query);
            appendMessage(response, "bot");
        }, 400);
    }

    aiForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleUserSubmission(aiInput.value);
    });

    // Quick Action Chips
    quickActions.addEventListener("click", (e) => {
        if (e.target.classList.contains("quick-chip")) {
            const query = e.target.getAttribute("data-query");
            handleUserSubmission(query);
        }
    });

    // Language & Intent Processing Engine
    function processQueryIntent(input) {
        const lower = input.toLowerCase();

        // 1. WhatsApp Intent
        if (lower.includes("whatsapp") || lower.includes("contact") || lower.includes("phone") || lower.includes("number")) {
            return `You can connect directly with our team on WhatsApp: ${VITHAL_KNOWLEDGE.company.whatsapp}\nOr email us at: ${VITHAL_KNOWLEDGE.company.email}`;
        }

        // 2. Hinglish / Hindi website request detection
        if (lower.includes("banane") || lower.includes("chahiye") || lower.includes("banana") || lower.includes("karna h")) {
            if (lower.includes("website") || lower.includes("web")) {
                return "Hum business requirements ke according modern responsive websites develop kar sakte hain. Aap kis type ki website banana chahte hain? Fast execution ke liye aap WhatsApp par direct baat kar sakte hain.";
            }
            if (lower.includes("app")) {
                return "Hum custom mobile apps (Android/iOS) build karte hain. Aap direct WhatsApp par requirement discuss kar sakte hain.";
            }
        }

        // 3. Marathi Detection
        if (lower.includes("kasa") || lower.includes("ahe") || lower.includes("pahije") || lower.includes("mhit")) {
            return "नमस्कार! आम्ही व्हिठ्ठल टेक्नॉलॉजी कडून विविध सॉफ्टवेअर, AI, आणि हार्डवेअर सोल्यूशन्स देतो. तुम्हाला कोणती माहिती हवी आहे?";
        }

        // 4. Services Inquiry
        if (lower.includes("service") || lower.includes("services") || lower.includes("what do you do") || lower.includes("software")) {
            const list = VITHAL_KNOWLEDGE.services.map(s => `• ${s.name}`).join("\n");
            return `We build standard and high-performance technology services:\n\n${list}\n\nType any service name to know more or click WhatsApp!`;
        }

        // 5. Products Inquiry
        if (lower.includes("product") || lower.includes("products") || lower.includes("hardware") || lower.includes("manufacturing")) {
            const list = VITHAL_KNOWLEDGE.products.map(p => `• ${p.name} (${p.category})`).join("\n");
            return `Our hardware focus & manufacturing areas include:\n\n${list}\n\nNote: Commercial availability depends on domain category specifications.`;
        }

        // 6. Quote Inquiry
        if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
            return `Project pricing depends entirely on custom architecture, scope, and target features. Connect with us on WhatsApp (${VITHAL_KNOWLEDGE.company.whatsapp}) for a exact technical quote!`;
        }

        // 7. Check specific service names
        for (let s of VITHAL_KNOWLEDGE.services) {
            if (lower.includes(s.name.toLowerCase())) {
                return `${s.name}: ${s.description}\n\nBest for: ${s.bestFor}\nKey Benefits: ${s.benefits.join(", ")}.`;
            }
        }

        // 8. Fallback Default
        return "I don't have enough information to answer that accurately. You can discuss it directly with the Vithal Technology team on WhatsApp: " + VITHAL_KNOWLEDGE.company.whatsapp;
    }

    // Secure Backend Hook Placeholder
    /*
    async function sendMessageToAIBackend(message) {
        // PRODUCTION NOTE:
        // GitHub Pages is purely client-side. Do NOT put secret keys here.
        // Connect this to your secure external backend endpoint (e.g., AWS Lambda, Cloudflare Workers).
        // return await fetch("YOUR_SECURE_API_ENDPOINT", { method: "POST", body: JSON.stringify({ message }) });
    }
    */
    
    // Global Access Helper
    window.openVithalAI = function() {
        if (aiContainer.classList.contains("closed")) {
            toggleChat();
        }
    };
});
