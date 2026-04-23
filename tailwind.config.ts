import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./i18n/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clinic-dark": "#0B5D34",
        "clinic-primary": "#148046",
        "clinic-light": "#3CB059",
        "clinic-accent": "#E6F4EA",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(20, 128, 70, 0.12)",
      },
    },
  },
};

export default config;
