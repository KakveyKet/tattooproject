module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/tw-elements/dist/js/**/*.js"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary1: '#E63946',
        isGray: "#2B2B2D",
        isGray2: "#DADADA",
        nav: "#9FE1E5",
        card: "#F4F4F4",
        active: "#0BFF62E5",
        view: "#FFB23E",
        edit: "#47F786",
        delete: "#FF6836",
        pending: "#FEB600"
      },
      backgroundColor: {
        primary1: '#E63946',
        isGray: "#2B2B2D",
        isGray2: "#DADADA",
        nav: "#9FE1E5",
        card: "#F4F4F4",
        active: "#0BFF62E5",
        view: "#FFB23E",
        edit: "#47F786",
        delete: "#FF6836",
        pending: "#FEB600"
      },
      borderColor: {
        primary1: '#E63946',
        isGray: "#2B2B2D",
        isGray2: "#DADADA",
        nav: "#9FE1E5",
        card: "#F4F4F4",
        active: "#0BFF62E5",
        view: "#FFB23E",
        edit: "#47F786",
        delete: "#FF6836",
        pending: "#FEB600"
      }


    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),],
};
