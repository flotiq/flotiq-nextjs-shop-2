module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',
        './templates/**/*.{js,jsx,ts,tsx}',
        './pages/post/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#41624B',
                red: '#FF0000',
                gray: '#9fa09c',
                'light-gray': '#F4F4F4',
                'green-gray': '#E8E9E3',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                grotesque: ['Darker Grotesque', 'sans-serif'],
            },
            minHeight: {
                '1/2vh': '50vh',
            },
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
