import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3.5s linear infinite",
      },
      boxShadow: {
        bottom: "0px -2px 5px 0px rgba(0,0,0,0.1)",
      },
      colors: {
        primary: "#D11F29",
        800: "#18181C",
        700: "#2A2A34",
        600: "#575767",
        500: "#717174",
        400: "#8E8E9D",
        300: "#EEEEF5",
        200: "#FAFAFC",
        100: "#FFFFFF",
        "800-dark": "#EFEFEF",
        "700-dark": "#DDDDE6",
        "600-dark": "#9797AB",
        "500-dark": "#7C7C8B",
        "400-dark": "#4F4F5E",
        "300-dark": "#23232D",
        "200-dark": "#0F0F13",
        "100-dark": "#000000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
