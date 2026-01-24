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
                    blue: '#1e3a8a',
                    gold: '#d97706',
                    beige: '#f8fafc',
                    text: '#1e293b',
                }
            }
        },
    },
    plugins: [],
}
