import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
} satisfies Config;
