import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "nunito": ["Nunito Sans", "sans-serif"]
      },
      boxShadow: {
        '3xl': '3px 3px 10px 2px rgba(0, 0, 0, 0.15), -1px -1px 10px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
