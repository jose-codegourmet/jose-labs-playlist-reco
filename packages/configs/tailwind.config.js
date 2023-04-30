/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
