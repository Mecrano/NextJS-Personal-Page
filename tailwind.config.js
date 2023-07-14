/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      'h1-md': '4rem',
      'h2-md': '3rem',
      'h3-md': '2.5rem',
      'h4-md': '2rem',
      'h5-md': '1.5rem',
      'h6-md': '1.125rem',
      'body-md': '1rem',
      'small-md': '0.875rem',
      'mini-md': '0.75rem',
      h1: '2.5rem',
      h2: '1.9rem',
      h3: '1.75rem',
      h4: '1.5rem',
      h5: '1.125rem',
      h6: '1rem',
      body: '1rem',
      small: '0.875rem',
      mini: '0.75rem',
    },
    colors: {
      gray: {
        800: '#090909',
        700: '#121212',
        600: '#2a2a2a',
        500: '#414141',
        400: '#717171',
        300: '#a0a0a0',
        200: '#d0d0d0',
        100: '#e7e7e7',
      },
      white: '#fff',
      black: '#000',
      blue: '#00a3ff',
      lime: '#00ff38',
      purple: { 300: '#0500ff', 200: '#485bff', 100: '#b6bdff' },
      pink: '#ff00c7',
      orange: '#ffa800',
      transparent: 'transparent',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '3rem',
      sm: '0.875rem',
    },
    extend: {
      transitionProperty: {
        left: 'left',
        opacity: 'opacity',
      },
    },
  },
}
