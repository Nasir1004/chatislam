/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-color": "#0c1f50",
      },
      spacing: {
        120: "34rem",
      },
      backgroundImage: {
        moreBGImage: "url('~assets/img/learn_background_image.png')",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
