/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                HEADERHEIGHT: "60px",
                STANDARDMARGINANDPADDING: 8,
                BREADCRUMBMARGINY: "8px",
                STANDARDCONTAINERPADDINGX: "8px",
                STANDARDCONTAINERPADDINGY: "8px",
                TABLEMARGINTOP: "16px",

                SIDERHEIGHT: "calc(100vh - 60px)",
                SIDERCOLLAPSEWIDTH: 54,
                SIDERNORMALWIDTH: 280,
                CONTENTPADDINGSTARTCOLLAPSE: "62px",
                CONTENTPADDINGSTART: "288px",
            },
        },
        colors: {
            GREEN: "green",
            RED: "red",
            BLUE: "#6981ff",
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
