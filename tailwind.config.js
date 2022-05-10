module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "8rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: {
          light: "#2dbb6a",
          lime: "#01bd4f",
          DEFAULT: "#009933",
          dark: "#ff16d1",
        },
        blue: {
          light: "#0EA5E9",
          DEFAULT: "#0D5DA5",
          dark: "#009eeb",
        },
        red: {
          light: "#2dbb6a",
          lime: "#01bd4f",
          DEFAULT: "#FF0000",
          dark: "#D32F2F",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#333333",
          DEFAULT: "#c0ccda",
          light: "#edeef3",
          lighter: "#000000DE",
          lightest: "#f6f6f6",
        },
      },
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
