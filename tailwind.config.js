/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#e9eaec",
        gray: {
          100: "#212529",
          200: "#172530",
          300: "#121212",
        },
        darkslategray: {
          100: "#414042",
          200: "#212f3f",
        },
        darkorchid: "#b511b8",
        darkorange: "#ff9119",
        gainsboro: {
          100: "#e9e4e4",
          200: "#dedede",
          300: "#dbdbdb",
          400: "#d9d9d9",
        },
        darkgray: "#a6a6a6",
        linen: "#fff4e9",
        mistyrose: "#ffdfdf",
        crimson: "#ed1b2f",
        royalblue: "#085bdd",
        black: "#000",
        violet: "#e995eb",
        forestgreen: "#00b14f",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        lexend: "Lexend",
        quicksand: "Quicksand",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
