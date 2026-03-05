/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 12s ease infinite",
        floatSlow: "floatSlow 25s ease-in-out infinite",
        floatSlowReverse: "floatSlowReverse 30s ease-in-out infinite",
        floatMedium: "floatMedium 35s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(80px, 60px)" },
        },
        floatSlowReverse: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-100px, -60px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translate(-50%, 0px)" },
          "50%": { transform: "translate(-50%, 80px)" },
          theme: {
  extend: {
    animation: {
      "spin-slow": "spin 18s linear infinite",
    },
  },
}
        },
      },
    },
  },
  plugins: [],
};