/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
	  extend: {
		colors: {
		  primary: "#ffffff",
		  secondary: "#aaa6c3",
		  tertiary: "#151030",
		  "black": "#292529",
		  "white-100": "#f3f3f3",
		  "logo-pink":"#DFA8A8",
		  "title-pink":"#996464",
		},
		boxShadow: {
		  card: "0px 35px 120px -15px #211e35",
		},
		screens: {
		  xs: "450px",
		},
	  },
	},
	plugins: [],
  };
