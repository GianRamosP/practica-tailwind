/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-light": ["./src/fonts/Mulish-Light.ttf", "sans-serif"],
        "font-bold": ["./src/fonts/Mulish-Bold.ttf", "sans-serif"],
        "font-regular": ["./src/fonts/Mulish-Regular.ttf", "sans-serif"],
      },
      colors: {
        text: "#7D7987",
        selected: "#1F1534",
        black: "#000000",
        white: "#FFFFFF",
        textReadMore: "#4089ED",
        textButton: "#458FF6",
        logo: "#5B9BF3",
        logoP: "#233348",
      },
    },
  },
  plugins: [],
};
