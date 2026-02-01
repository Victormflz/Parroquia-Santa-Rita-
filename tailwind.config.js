/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                parish: {
                    // Azules profundos y celestiales
                    blue: '#1e3a8a',      // Azul principal
                    'blue-dark': '#0f172a',  // Azul oscuro nocturno
                    'blue-light': '#3b82f6', // Azul cielo
                    'blue-soft': '#60a5fa',  // Azul suave
                    
                    // Dorados cálidos y luminosos
                    gold: '#d97706',      // Dorado principal
                    'gold-light': '#f59e0b', // Dorado brillante
                    'gold-soft': '#fbbf24',  // Dorado suave
                    
                    // Tonos naturales y serenos
                    beige: '#f8fafc',     // Beige claro
                    'cream': '#fefce8',   // Crema cálido
                    'sand': '#fef3c7',    // Arena
                    'arena': '#f5f1e8',   // Beige arena principal
                    'arena-light': '#f9f6f0', // Arena claro
                    
                    // Grises elegantes
                    text: '#1e293b',      // Texto principal
                    'text-light': '#334155', // Texto secundario mejorado
                    'gray-soft': '#64748b',  // Gris suave mejorado
                    
                    // Acentos espirituales
                    'violet': '#7c3aed',  // Violeta litúrgico
                    'rose': '#e11d48',    // Rosa sagrado
                    'white-soft': '#f1f5f9', // Blanco suave
                    softwhite: '#f5f1e8'  // Soft white arena
                }
            },
            boxShadow: {
                'glow': '0 0 20px rgba(217, 119, 6, 0.3)',
                'glow-lg': '0 0 40px rgba(217, 119, 6, 0.4)',
                'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                'divine': '0 4px 20px rgba(30, 58, 138, 0.15)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-divine': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #d97706 100%)',
                'gradient-sacred': 'linear-gradient(to bottom, rgba(30, 58, 138, 0.05), rgba(217, 119, 6, 0.05))',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
