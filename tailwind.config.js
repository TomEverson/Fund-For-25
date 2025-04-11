/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sunset: {
          mango: "#FF9A3C",
          roasted: "#4A3933",
        },
      },
    },
  },
  plugins: [],
};

