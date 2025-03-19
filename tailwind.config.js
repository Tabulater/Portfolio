/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          foreground: '#ccd6f6',
        },
        secondary: {
          DEFAULT: '#64ffda',
          foreground: '#0a192f',
        },
        text: {
          primary: '#ccd6f6',
          secondary: '#8892b0',
        },
        background: '#0a192f',
        foreground: '#ccd6f6',
        card: {
          DEFAULT: '#0a192f',
          foreground: '#ccd6f6',
        },
        popover: {
          DEFAULT: '#0a192f',
          foreground: '#ccd6f6',
        },
        muted: {
          DEFAULT: '#8892b0',
          foreground: '#8892b0',
        },
        accent: {
          DEFAULT: '#64ffda',
          foreground: '#0a192f',
        },
        destructive: {
          DEFAULT: '#ff4444',
          foreground: '#ccd6f6',
        },
        border: '#8892b0',
        input: '#8892b0',
        ring: '#64ffda',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
} 