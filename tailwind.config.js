/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: " #1DD100",
        gray: "#03071299",
        mainBg: "#F7F8F8",
        bordergray: "#03071233",
        "kbd_bg": "#F7F8F8",
        "kbd_color":"#002c3e",
        "footer_bg":"#030712"
        
      },
      wordSpacing: {
        wide: "10px",
        wider: "20px",
        widest: "30px",
      },
      borderRadius: {
        xl: "12px",
      },
      fontSize:{
        "kbd_size":"18px"
      }
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".word-spacing-wide": {
          "word-spacing": "10px",
        },
        ".word-spacing-wider": {
          "word-spacing": "20px",
        },
        ".word-spacing-widest": {
          "word-spacing": "30px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
