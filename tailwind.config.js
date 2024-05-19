/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto : ["Roboto", "sans-serif"],
      },
      colors: {
        mycolor: "rgba(255, 255, 255, 0.694)",
        mybg: "rgba(255, 255, 255, 0.494)"
    }
    },
  },
  plugins: [],
}

