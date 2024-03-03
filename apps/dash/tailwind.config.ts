import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "canvas-light": "#FEFEFE",
        "canvas-alt-light": "F1F5F9",
        "canvas-dark": "#090A0A",
        "canvas-alt-dark": "#121414",
      },
      aspectRatio: {
        tv: "3 / 4",
      },
    },
  },
  plugins: [],
};
export default config;
