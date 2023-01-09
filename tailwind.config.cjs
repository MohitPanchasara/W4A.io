const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config}*/

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'sm': {'max': '375px'},
      'md': {'max': '768px'},
      'lg':{'min':'769px'},
    
    },
  
    extend: {
      
      fontFamily: {
        satoshi: ["Satoshi-Variable","sans-serif"],
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        grotesk: ["Space Grotesk"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primaryweb: "#0A090F",
        secodaryweb: "#232126",
        tertiaryweb: "#3D3D40",
        transparent: "transparent",
        current: "currentColor",
        mainBlue: "#3F00F9",
        mainBlack: "#18121F",
        compWhite: "#F5DFD8",
        accent: "#15121F",
        webSky: "#0894FF",
        webSkyLite: "#C4E5FF",
        webBlue: "#6E53FF",
        webBlueLite: "#DCD6FF",
        webPurpleLite: "#ECCFFA",
        webPink: "#F95088",
        webPinkLite: "#FED5E3",
        webPeach: "#FF6F62",
        webPeachLite: "#FFDDD9",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type"), require("@tailwindcss/forms")],
};
