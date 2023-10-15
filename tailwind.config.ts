// import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#232536",
        yellow: "#FFD050",
        purple: "#592EA9",
        darkgray: "#4C4C4C",
        mediumgray: "#6D6E76",
        lightgray: "#F4F4F4",
        levender: "#F4F0F8",
        lightyellow: "#FBF6EA",
      },
      fontFamily: {
        sen: ["var(--sen)"],
        inter: ["var(--inter)"],
      },
    },
  },
  plugins: [],
};
