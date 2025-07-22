module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: "100%",
        margin: "auto",
        padding: {
          DEFAULT: "0 108px",
        },
      },
      screens: {
        xl: "1285px",
        lg: "1040px",
        md: "768px",
        sm: "640px",
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "sans-serif"],
      },
      gridTemplateRows: {
        "[repeat(3,427px)]": "repeat(3, 427px)",
        ddd: "repeat(2, auto)",
      },
      backgroundImage: {
        heroBg: "url('/src/assets/img/bgHero.png')",
        linksGradient:
          "linear-gradient(270deg, rgba(16, 31, 31, 0.20) 0%, #4B52CF 100%);",
      },
      backgroundSize: {
        fullBg: "100% 100%",
      },
      gridTemplateColumns: {
        ddd: "repeat(2, auto)",
      },

      textColor: {
        graySubtitle: "rgba(255, 255, 255, 0.70)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
    },
  },
  plugins: [],
};
