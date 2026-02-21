/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  // Keep existing visual reset from the current stylesheet.
  corePlugins: {
    preflight: false
  },
  plugins: []
};
