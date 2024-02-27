/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "blue",
        dark: "#25293c",
        secondary: "#6f6b7d",
        white: "#ffffff",
        bgPrimaryLight: "red", //main bg color
        green: "#22c55e",
        red: "#ef4444",
        grey: "#6f6b7d",
        iconsLightGrey: "#6f6b7d",
        darkPrimary: "#2f3349",
        darkGrey: "#abb3d7",
        itemsBgLight: "#CBD5E1",
        itemsBgDark: "#111827",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
