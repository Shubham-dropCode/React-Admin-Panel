/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fbf9f6",
        white: "#fff",
        gray: {
          "100": "#212121",
          "200": "#181c32",
        },
        mediumseagreen: {
          "100": "#20d489",
          "200": "#1bb675",
          "300": "#16ab64",
        },
        whitesmoke: {
          "100": "#f7f9fb",
          "200": "#f3f6f9",
          "300": "#ecf0f3",
          "400": "#e5eaee",
        },
        slategray: "#80808f",
        honeydew: "#e4fff4",
        darkblue: {
          "100": "#5710b2",
          "200": "#4f0ca4",
          "300": "#400093",
        },
        blueviolet: {
          "100": "#8950fc",
          "200": "#8423ff",
          "300": "#661dc5",
        },
        gainsboro: "#dadada",
        ghostwhite: "#f7f0ff",
        black: "#000",
        silver: "#b5b5c3",
        crimson: "#f1416c",
        darkorchid: "#823fd9",
        darkslategray: {
          "100": "#464e5f",
          "200": "#3f4254",
        },
        gold: "#ffc700",
        lightslategray: "#7e8299",
        cornflowerblue: "#00a3ff",
        lavenderblush: {
          "100": "#fff3f6",
          "200": "#ffeff3",
        },
        cornsilk: "#fff8dd",
        aliceblue: "#e7f6ff",
        linen: "#f9f2e7",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "11xs-5": "1.5px",
        "12xs": "1px",
        "3xs": "10px",
        xl: "20px",
        "4xs": "9px",
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "0.81rem",
      base: "1rem",
      xs: "0.75rem",
      sm: "0.88rem",
      lg: "1.13rem",
      "2xs": "0.69rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
