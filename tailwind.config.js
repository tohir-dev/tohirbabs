/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      grotesk: ['"Space Grotesk"'],
      mono: ['"Space Mono"'],
      pt: ['"PT Mono"'],
    },
  },
  plugins: [],
};
