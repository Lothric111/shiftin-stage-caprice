import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'CooperArabic-Regular': ['CooperArabic-Regular', 'sans-serif'],
        'FFHekaya-Light': ['FFHekaya-Light', 'sans-serif'],
      },
      colors:{
        "red-100":"#BF1725"
      },
      animation:{
        bounce_animation:"bounce 2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
export default config;
