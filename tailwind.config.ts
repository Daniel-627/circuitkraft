import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode with class-based toggling
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['Zen Dots', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          background: "var(--dark-background)",
          foreground: "var(--dark-foreground)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
