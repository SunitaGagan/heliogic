/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope", "sans-serif"], // lowercase key is best practice
            },
            colors: {
                brand: "#B7121F", // custom color
                black: "#333",
                blue: "#00007A",
            },
            fontSize: {
                "heading-xl": "3.188rem",
            },
        },
    },

    plugins: [],
};