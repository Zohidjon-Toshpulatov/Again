/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'woman-bottom': "url('.././src/assets/Women-bottom.png')",
        'mb-woman-bottom': "url('.././src/assets/bg-woman.png')",
        'slider': "url('.././src/assets/device+ai.png')"
      },
      backgroundColor: {
        'white-rbga': 'rgba(232,226,239, 0.7)',
        'cus-slide': '#e5e7eb',
      },
      colors: {
        'cus-red': '#e1251b',
        'cus-gray': '#43495b'
      },
      fontSize: {
        45: '2.8125rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
