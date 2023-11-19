import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        greenspark_purple: 'hsla(232, 51%, 36%, 1)',
        greenspark_purple_hover: 'hsla(232, 51%, 36%, 0.8)',
        greenspark_green: 'hsla(157, 33%, 35%, 1)',
        greenspark_green_hover: 'hsla(157, 17%, 73%, 1)',
        greenspark_sand: 'hsla(42, 47%, 90%, 1)',
        greenspark_grey: 'hsla(0, 0%, 69%, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
