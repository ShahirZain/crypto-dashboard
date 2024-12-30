/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        base_gray: '#F2F3F6'
      }
    },
  },
  plugins: [],
};

