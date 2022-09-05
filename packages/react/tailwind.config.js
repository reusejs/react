module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    },
    require("tailwind-scrollbar-hide"),
  ],
};
