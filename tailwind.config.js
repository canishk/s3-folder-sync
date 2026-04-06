/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['System', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto'],
      },
      colors: {
        primary: "#004d64",
        "primary-container": "#006684",
        surface: "#faf9fa",
        "surface-container-low": "#f4f3f4",
        "surface-container-highest": "#e3e2e3",
        "on-surface": "#1a1c1d",
        "on-surface-variant": "#3f484d",
      },
      fontSize: {
        'display-large': ['57px', { lineHeight: '64px', fontWeight: '700' }],
        'display-medium': ['45px', { lineHeight: '52px', fontWeight: '700' }],
        'display-small': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'headline-large': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'headline-medium': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'headline-small': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'title-large': ['22px', { lineHeight: '28px', fontWeight: '500' }],
        'title-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'title-small': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-large': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'label-large': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'label-small': ['11px', { lineHeight: '16px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}