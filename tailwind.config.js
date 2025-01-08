/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", 'sans-serif'],
    },
    extend: {
      colors: {
        base_gray: "#F2F3F6",
      },
    },
  },
  plugins: [],
};

