import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AFDFE4',
          dark: '#7ac4cc',
          light: '#d4eff2',
        },
        text: {
          primary: '#2a3f4f',
          secondary: '#5a7080',
          muted: '#8a9aa5',
        },
        bg: {
          primary: '#ffffff',
          secondary: '#f5fafa',
          tertiary: '#eaf6f7',
        },
      },
      fontFamily: {
        jp: ['Zen Kaku Gothic New', 'sans-serif'],
        en: ['Fredoka', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'squash': 'squash 2.4s ease 0.5s forwards',
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'bounce-down': 'bounceDown 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -20px) scale(1.05)' },
          '50%': { transform: 'translate(-15px, 15px) scale(0.95)' },
          '75%': { transform: 'translate(-20px, -10px) scale(1.02)' },
        },
        squash: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '10%': { transform: 'scaleY(0)' },
          '20%': { transform: 'scaleY(1)' },
          '35%': { transform: 'scaleY(0)' },
          '50%': { transform: 'scaleY(1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

