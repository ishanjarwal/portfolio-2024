/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pri": "var(--pri)",
        "text": "var(--text)",
        "background": "var(--background)",
        "text-muted": "var(--text-muted)",
        "border": "var(--border)",
        "dark-text": "var(--dark-text)",
        "dark-background": "var(--dark-background)",
        "dark-text-muted": "var(--dark-text-muted)",
        "dark-border": "var(--dark-border)",
      },
      backgroundImage: {
        "gradient-bg": "var(--gradient-bg)",
        "dark-gradient-bg": "var(--dark-gradient-bg)"
      },
    },
  },
  plugins: [],
};
