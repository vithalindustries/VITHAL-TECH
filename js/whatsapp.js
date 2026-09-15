/* ==================================================
   WHATSAPP URL GENERATOR
   ================================================== */

const VITHAL_WHATSAPP = {
    number: "917498846061",

    createServiceUrl: function(serviceName) {
        const text = `Hello Vithal Technology, I need ${serviceName}. I would like to discuss my requirement.`;
        return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`;
    },

    createProductUrl: function(productName) {
        const text = `Hello Vithal Technology, I need the ${productName} product. I would like to discuss my requirement.`;
        return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`;
    },

    createGeneralUrl: function() {
        const text = "Hello Vithal Technology, I need a service or product. I would like to discuss my requirement.";
        return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`;
    }
};
