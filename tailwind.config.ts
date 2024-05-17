import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        label: "0 0 0 1px rgb(29, 155, 240)",
      },
      colors: {
        dark: "var(--black-color)",
        divider: "rgba(239, 243, 244, 1.00)",
        gray: "rgb(83, 100, 113)",
        light: "rgba(255, 255, 255, 0.85)",
        lightblue: "rgb(207, 217, 222)",
        primary: "var(--primary-color)",
        shadow: "rgba(0, 0, 0, 0.4)",
        "button-hover": "rgb(230, 230, 230)",
        "light-primary": "rgba(15, 20, 25, 0.1)",
        "lightblue-hover": "rgba(29, 155, 240, 0.10)",
        "primary-hover": "rgb(26, 140, 216)",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      spacing: {
        auto: "auto",
        "45vw": "45vw",
        "80vw": "80vw",
        "90vh": "90vh",
      },
      transitionProperty: {
        "margin-bottom": "margin-bottom",
      },
      zIndex: {
        1: "1",
        2: "2",
        100: "100",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".flex-0": {
          flex: "0 0 auto",
        },
        ".font-inherit": {
          "font-size": "inherit",
        },
        ".text-unset": {
          "text-overflow": "unset",
        },
        ".whitespace-inherit": {
          "white-space": "inherit",
        },
        ".word-break": {
          "word-wrap": "break-word",
        },
      });
    }),
  ],
};

export default config;
