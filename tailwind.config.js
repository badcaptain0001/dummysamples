module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        parent: {
          50: "#7381ff",
          100: "#6977ff",
          200: "#5f6dff",
          300: "#5563ff",
          400: "#4b59f5",
          500: "#414feb",
          600: "#3745e1",
          700: "#2d3bd7",
          800: "#2331cd",
          900: "#1927c3",
        },
        "peach-cream": {
          DEFAULT: "#FFEDE0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFEDE0",
          600: "#FFCCA8",
          700: "#FFAC70",
          800: "#FF8B38",
          900: "#FF6B00",
        },
      },
    },
  },
  plugins: [],
};
