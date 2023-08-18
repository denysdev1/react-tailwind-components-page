/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NeutrifPro: ["Neutrif Pro", "sans-serif"],
      },
      colors: {
        "regular-gray": "#9193A9",
        "custom-rose": "#FE5459",
        "custom-rose-hover": "rgb(235, 83, 89)",
        "custom-light-rose": "#FD5359",
      },
      boxShadow: {
        header: "0px 4px 10px 0px rgba(39, 40, 49, 0.03)",
      },
    },
  },
  plugins: [],
};
