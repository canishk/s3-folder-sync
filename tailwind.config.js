/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./screens/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#004d64",           // your exact teal
        "primary-container": "#006684",
        surface: "#faf9fa",
        "surface-container-low": "#f4f3f4",
        "surface-container-highest": "#e3e2e3",
        "on-surface": "#1a1c1d",
        "on-surface-variant": "#3f484d",
      },
    },
  },
  plugins: [],
}