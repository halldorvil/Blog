module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "Arial", "Helvetica"],
      serif: ["ui-serif", "Georgia", "Times New Roman"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
