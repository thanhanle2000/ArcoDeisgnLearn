/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                HEADERHEIGHT: "60px",
                STANDARDCONTAINERPADDINGX: "16px",
                STANDARDCONTAINERPADDINGY: "8px",
                TABLEFILTERHEIGHT: "53px",
                TABLEMARGINTOP: "16px",
                SIDERHEIGHT: "calc(100vh - 60px)",
                SIDERCOLLAPSEWIDTH: 54,
                CONTENTPADDINGSTARTCOLLAPSE: "64px",
                SIDERNORMALWIDTH: 280,
                CONTENTPADDINGSTART: "290px",
            },
        },
        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
    },
    plugins: [],
};
