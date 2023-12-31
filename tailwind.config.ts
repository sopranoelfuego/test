import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "red":"#c31b17",
        "grey":"#F3F3F3",
        "green":"#40a25a",
        "yellow":"#fcc203",
        "orange":{
          100:"#FCF3E8",
          400:"#E67F40"
        },
        "purple":{
         200: "#EDE5F4",
         400:"#520193"
        }
      }
    },
  },
  plugins: [],
}
export default config
