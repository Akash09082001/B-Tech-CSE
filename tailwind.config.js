/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
  ],
  theme: {
    screens: {
      xs: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1986px",
    },
    colors: {
      "brand-red": "#A91D54",
      "brand-yellow": "#FED800",
      "brand-lisa": "#9333EA",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {

      height: {
        13: "50px",
        200: "200px",
        280: "280px",
        300: "300px",
        350: "350px",
        360: "360px",
        370: "370px",
        380: "380px",
        400: "400px",
        425: "425px",
        450: "450px",
        500: "500px",
        720: "720px",
        820: "820px"
      },
      spacing: {
        '13': '50px',
        '15': '60px',
      },
      aspectRatio: {
        "16/9": "960 / 540",
        "4/3": "640 / 480",
      },
      fontSize: {
        "2xl+": ["28px", "34px"],
        "4xl+": ["36px", "40px"],
        "5xl+": ["54px", "1"],
      },
      textUnderlineOffset: {
        6: "6px",
      },
      fontFamily: {
        "caveat": ["Caveat", "cursive"],
        "inter": ["Inter", "sans-serif"],
        'hm-sans': ['HM Sans Regular', 'sans-serif'],
      },
      backgroundImage: {
        "hero-banner": "url('assets/banner-img/hero-banner.webp')",
        // "text": "url('assets/banner-img/text-bg.png')",
        "text": "url('assets/banner-img/text-bg1.jpg')",
        "mac-banner": "url('assets/banner-img/mac-banner1.webp')",
        "linear-graph": "url('assets/banner-img/graph-3.webp')",
        "boa-banner": "url('assets/banner-img/boa-banner1.webp')",
        "lisa": "url('assets/banner-img/lisa image.webp')",
        "footer-banner": "url('assets/banner-img/footer-banner.webp')",
        "deco-mob": "url('assets/banner-img/decorative-mob.webp')",
        "deco-web": "url('assets/banner-img/decorative-web.webp')",
      },
      backgroundColor: {
        "modal-dark-fade": "rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
