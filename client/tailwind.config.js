/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your template files
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '14xl': '12rem', // Adjust the size as needed
      },
      animation: {
        'blink-cursor': 'blink 0.7s steps(1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      backgroundImage: {
        'custom-bg-1': "url('src/assets/image/backg1.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#112A46", 
          secondary: "#E11D48", 
          accent: "#22C55E", 
          neutral: "#3D4451", 
          "base-100": "#FFFFFF", 
        },
      },
    ],
  },
};
