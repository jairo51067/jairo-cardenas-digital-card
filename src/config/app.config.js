// src/config/app.config.js
export const config = {
    theme: 'light',
    projects: [
        {
            id: 'ecommerce-2026',
            title: 'VendeMás E-commerce',
            description: 'Lanzamiento 2026 - Solución de ventas online.',
            url: 'https://vendemas-landing.vercel.app/',
            isNew: true, // Esto activará nuestro badge
            icon: 'fa-shopping-cart'
        },
        {
            id: 'metabolic-tracking',
            title: 'Metabolic App',
            url: '#', 
            isNew: false,
            icon: 'fa-chart-line'
        }
    ]
};