import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      iphone: {
        '382': '382px',
      },
      phonesm: { max: '390px' },
      phone: { max: '639px' },
      sm: '640px',
      md: '768px',
      pad: { max: '810px' },
      xmd: '811px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}
export default config
