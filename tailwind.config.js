/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pale-lime': '#F1FBE3',
                'soft-mint': '#E9F7EE',
                'energy-green': '#8CC63F',
                'energy-green-light': '#A6DB5A',
                'tech-blue': '#3FA9F5',
                'deep-green': '#24332D',
            },
            backgroundImage: {
                'page-gradient': 'linear-gradient(180deg, #F1FBE3 0%, #E9F7EE 100%)',
                'action-gradient': 'linear-gradient(0deg, #2F7D32 0%, #2F7D32 100%)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
