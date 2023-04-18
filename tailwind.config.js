export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/banner.jpg')",
      },
    },
  },
};
