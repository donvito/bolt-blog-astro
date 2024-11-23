/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-light': '#ffffff',
        'theme-dark': '#1a1a1a',
        'accent-light': '#2563eb',
        'accent-dark': '#60a5fa'
      }
    }
  },
  plugins: []
};