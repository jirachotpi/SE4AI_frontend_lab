/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#1e40af',      // สีทอง มข.
        'kku-maroon': '#60a5fa',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}