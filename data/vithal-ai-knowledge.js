/* ==================================================
   VITHAL AI KNOWLEDGE BASE & INTENT MAPPING
   ================================================== */

const VITHAL_KNOWLEDGE = {
    company: {
        brandName: "Vithal Technology",
        legalName: "Vithal Technology Private Limited",
        description: "An integrated technology and manufacturing company focused on software, artificial intelligence, cybersecurity, SaaS, IoT, electronics, and intelligent machines.",
        email: "vithaltechnology@gmail.com",
        whatsapp: "+91 7498846061",
        whatsappRaw: "917498846061"
    },
    
    services: [
        {
            id: "website-dev",
            name: "Website Development",
            icon: "assets/icons/website.svg",
            description: "High-performance, ultra-responsive corporate websites and web applications built with modern engineering.",
            scope: "Full-stack web applications, corporate sites, custom UI/UX animations, performance optimization.",
            bestFor: "Businesses requiring modern digital brand presence or complex dynamic web portals.",
            benefits: ["SEO optimized", "Fast page loads", "Custom UX/UI visual polish"],
            useCases: ["Enterprise Portals", "Product Websites", "Web Platforms"]
        },
        {
            id: "app-dev",
            name: "App Development",
            icon: "assets/icons/app.svg",
            description: "Native and cross-platform mobile apps for iOS and Android.",
            scope: "Custom mobile interfaces, API integration, push notifications, scalable client architecture.",
            bestFor: "Startups and enterprises expanding service delivery to smartphones.",
            benefits: ["Cross-platform compatibility", "High performance", "Secure local storage"],
            useCases: ["Client Portals", "On-demand Service Apps", "Internal Operations Tools"]
        },
        {
            id: "ai-dev",
            name: "AI Development",
            icon: "assets/icons/ai.svg",
            description: "Tailored machine learning models, modern neural architectures, and intelligent software automation.",
            scope: "Data model custom tuning, predictive data engines, API model integrations.",
            bestFor: "Organizations looking to leverage domain data for decision-making.",
            benefits: ["Data-driven clarity", "Automated routine work", "Higher operational throughput"],
            useCases: ["Predictive Analytics", "Dynamic Recommendation Systems", "Data Parsing"]
        },
        {
            id: "ai-agent-dev",
            name: "AI Agent Development",
            icon: "assets/icons/ai.svg",
            description: "Autonomous digital workers programmed to execute workflows, manage chats, and handle operational tasks.",
            scope: "Multi-step automated reasoning, auto-replies, system integrations via REST webhooks.",
            bestFor: "Support teams, lead funnels, and automated operations.",
            benefits: ["24/7 autonomous capability", "Reduced response times", "Multi-lingual conversational flow"],
            useCases: ["Support Assistants", "Automated Sales Funnels", "Data Scrubbing Agents"]
        },
        {
            id: "evisiting-card",
            name: "E-Visiting Card Development",
            icon: "assets/icons/website.svg",
            description: "Digital, interactive, and modern NFC/Web business identity cards.",
            scope: "Click-to-action contacts, social integrations, dynamic QR generation.",
            bestFor: "Executives, sales leads, and corporate branding.",
            benefits: ["Instant contact save", "Eco-friendly", "Real-time info edits"],
            useCases: ["Corporate Team Cards", "Executive Networking Cards"]
        },
        {
            id: "custom-software",
            name: "Custom Software Development",
            icon: "assets/icons/software.svg",
            description: "Bespoke desktop, web, or internal enterprise software tools.",
            scope: "Database structures, custom UI controls, role management, workflow automation.",
            bestFor: "Companies needing tailored tools beyond off-the-shelf offerings.",
            benefits: ["Tailored logic fit", "Full code ownership", "High security"],
            useCases: ["Internal ERP Tools", "Inventory Hubs", "Workflow Managers"]
        },
        {
            id: "game-dev",
            name: "Game Development",
            icon: "assets/icons/software.svg",
            description: "Interactive 2D/3D games, simulations, and gamified applications.",
            scope: "Game logic, physics engines, graphic pipeline styling, audio sync.",
            bestFor: "Interactive brand campaigns, casual games, or dynamic simulators.",
            benefits: ["High user engagement", "Custom branding", "Smooth frame rendering"],
            useCases: ["Marketing Gamification", "Educational Simulators", "Casual Games"]
        },
        {
            id: "iot-software",
            name: "IoT Software Development",
            icon: "assets/icons/iot.svg",
            description: "Software interfaces connecting physical sensors, hardware boards, and dashboards.",
            scope: "MQTT/HTTP telemetry, real-time dashboards, sensor signal triggers.",
            bestFor: "Smart equipment operators, tracking platforms, industrial telemetry.",
            benefits: ["Real-time visual monitoring", "Remote hardware control", "Data telemetry logging"],
            useCases: ["Smart Facility Controls", "Telemetry Hubs", "Equipment Tracking"]
        },
        {
            id: "ads-campaigns",
            name: "Google Ads / Meta Ads",
            icon: "assets/icons/website.svg",
            description: "Data-targeted digital advertising campaigns across Meta and Google platforms.",
            scope: "Targeting setup, conversion tracking, copy alignment, retargeting setup.",
            bestFor: "Businesses aiming to scale digital acquisitions efficiently.",
            benefits: ["Data-backed budget distribution", "Direct lead capture", "Clear conversion metrics"],
            useCases: ["Product Launches", "Lead Acquisition", "Brand Scale"]
        },
        {
            id: "lead-generation",
            name: "Lead Generation",
            icon: "assets/icons/website.svg",
            description: "Architected funnels, forms, and digital pipelines to capture high-intent inquiries.",
            scope: "Landing page setup, intent qualification funnels, CRM delivery.",
            bestFor: "B2B and high-value service businesses.",
            benefits: ["Higher intent visitors", "Automated delivery", "Reduced acquisition cost"],
            useCases: ["B2B Acquisition", "Service Consultations"]
        },
        {
            id: "cybersecurity",
            name: "Cybersecurity Services",
            icon: "assets/icons/cybersecurity.svg",
            description: "Vulnerability assessments, code audits, and secure infrastructure configurations.",
            scope: "Penetration testing, source review, network hardening, standard compliance check.",
            bestFor: "Web platforms, financial apps, and sensitive client repositories.",
            benefits: ["Reduced data breach risk", "Harden infrastructure", "Protect corporate trust"],
            useCases: ["Code Risk Review", "Network Audits", "Data Hardening"]
        },
        {
            id: "vithal-saas",
            name: "Vithal AI SaaS",
            icon: "assets/icons/ai.svg",
            description: "Cloud-hosted software tools built for productivity, automated operations, and AI utilities.",
            scope: "Subscription tools, custom cloud endpoints, dynamic automated toolsets.",
            bestFor: "Teams looking for scalable ready-to-deploy software tools.",
            benefits: ["Zero local hardware overhead", "Continuous feature upgrades", "Secure cloud platform"],
            useCases: ["Cloud Workflows", "Automated Analytics Hubs"]
        }
    ],

    products: [
        {
            id: "led-lights",
            name: "LED Lights",
            category: "Product Concept / Hardware Category",
            description: "High-efficiency solid-state illumination units and custom control boards.",
            scope: "Custom circuit design, energy-efficient drivers, thermal handling designs.",
            bestFor: "Commercial facilities, custom industrial setups, architectural designs.",
            benefits: ["Low power consumption", "Extended unit lifetime", "Robust build quality"],
            useCases: ["Industrial Spaces", "Architectural Highlights"]
        },
        {
            id: "ai-cctv",
            name: "AI CCTV Cameras",
            category: "Technology Focus / Intelligent Vision",
            description: "Hardware optical sensors integrated with edge vision processing logic.",
            scope: "Edge object recognition, dynamic movement alerts, video stream analytics.",
            bestFor: "Perimeter monitoring, facility safety, access surveillance.",
            benefits: ["Edge detection logic", "Reduced false alerts", "24/7 automated monitoring"],
            useCases: ["Facility Security", "Access Monitoring"]
        },
        {
            id: "drones",
            name: "Drones",
            category: "Development Category / Aerial Robotics",
            description: "Unmanned aerial hardware concepts designed for mapping, surveillance, and telemetry.",
            scope: "Flight controller programming, telemetry link setup, lightweight chassis engineering.",
            bestFor: "Aerial inspections, agricultural telemetry, field tracking.",
            benefits: ["Automated waypoints", "High data resolution", "Remote site access"],
            useCases: ["Site Inspections", "Field Telemetry"]
        },
        {
            id: "robots",
            name: "Robots",
            category: "Development Category / Mechatronics",
            description: "Programmable mechanical automation units designed for structured tasks.",
            scope: "Actuator driver logic, micro-controller code, spatial safety loops.",
            bestFor: "Repetitive floor operations, component moving, hardware testing.",
            benefits: ["Consistent execution", "Reduced manual overhead", "High repeatability"],
            useCases: ["Floor Handling", "Automated Testing"]
        },
        {
            id: "autonomous-vehicles",
            name: "Autonomous Vehicles",
            category: "Technology Focus / Unmanned Systems",
            description: "Self-navigating platform concepts utilizing sensor array networks and pathfinding algorithms.",
            scope: "Sensor fusion arrays (LiDAR/Vision/Sonar), navigation logic, obstacle avoidance.",
            bestFor: "Indoor warehouse transport, controlled site robotics.",
            benefits: ["Obstacle avoidance", "Automated transit routes", "24/7 dynamic dispatch"],
            useCases: ["Warehouse Transit", "Enclosed Compound Transport"]
        },
        {
            id: "iot-devices",
            name: "IoT Devices",
            category: "Hardware Engineering / Telemetry",
            description: "Custom circuit boards, micro-controller setups, and sensor arrays.",
            scope: "PCB layout planning, firmware engineering, radio protocol configurations.",
            bestFor: "Smart machinery, environmental tracking, hardware prototyping.",
            benefits: ["Direct hardware control", "Secure wireless communication", "Low power consumption"],
            useCases: ["Telemetry Gathering", "Remote Machine Monitoring"]
        }
    ]
};
