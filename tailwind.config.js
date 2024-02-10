/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffce56",
        denim: "#2E3FBD",
        "light-denim": "#4f63f9",
        "pacific-blue": "#17B8CA",
        input: "#F6F9FF",
      },
    },
  },
  plugins: [],
};
