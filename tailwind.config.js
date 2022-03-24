module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
 
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/
    },
    {
      pattern: /^to-/
    }
  ],
  darkMode: 'class', // or 'media or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
