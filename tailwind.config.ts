import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#fffefe",
        "bg-secondary": "#f3f2f2",
        "text-primary": "#020202",
        "text-secondary": "#908d8d",
        "hover-color": "#894ED6",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
