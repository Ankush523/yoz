/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'early-access-gradient': "url('https://uploads-ssl.webflow.com/63fdce8de20c75a28b758a56/6437c182a15c9a26ee4830b0_cta-bg%20(2).png')",
        'landing': "url('https://uploads-ssl.webflow.com/63fdce8de20c75a28b758a56/6437c0a1f2f4a80d711a09a5_yoz-bg2.svg')"
      },
      colors: {
        primary: '#111012',
        secondary: '#959595'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
