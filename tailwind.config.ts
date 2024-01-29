import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                cardTopSection: "linear-gradient(0deg, #101010 7.05%, rgba(16, 16, 16, 0.00) 44.44%)",
                purpleBtn: "linear-gradient(90deg, #9F8BFF, #7053FF)",
                purpleBorder: "linear-gradient(#363636, #7F43FF)",
                hoverPurpleBtn:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(111deg, #9F8BFF 0%, #7053FF 100%)",
            },
            colors: {
                offBlack: "#101010",
                lightPrimary: "#FAFAFA",
                lightPurple: "#9F8BFF",
                darkSurface: "#1A1A1A",
            },
            boxShadow: {
                card: "0px 0px 1px 0px rgba(128, 128, 128, 0.20), 0px 2px 30px 0px rgba(128, 128, 128, 0.08), 0px 0px 15px 0px rgba(128, 128, 128, 0.03)",
                insetBtn: "inset 0px 0px 14.1px 0px rgba(255, 255, 255, 0.25)",
            },
        },
    },
    plugins: [],
};
export default config;
