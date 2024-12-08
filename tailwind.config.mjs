/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'-md': '@media (min-width: 768px)',
				'-lg': '@media (min-width: 1024px)',
			},
			colors: {
				"paper": "#F2F0E3",
				"coral": "#F76F53",
				"dark": "#202020",
				"zen-blue": "#6287f5",
				"zen-green": "#63f78b",
			},
		},
	},
	plugins: [],
}