/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],

	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				"2xl": "1400px",
			},
		},
		colors: {
			current: "currentColor",
			border: "var(--b-700)",
			input: "var(--b-700)",
			ring: "var(--b-700)",
			transparent: "transparent",
			// backgrounds
			b: {
				900: "var(--b-900)",
				800: "var(--b-800)",
				700: "var(--b-700)",
			},
			// foregrounds
			f: {
				100: "var(--f-100)",
				200: "var(--f-200)",
				300: "var(--f-300)",
			},
			accent: {
				500: "var(--accent-500)",
				600: "var(--accent-600)",
				900: "var(--accent-900)",
			},
			danger: {
				500: "var(--danger-500)",
				900: "var(--danger-900)",
			},
			warning: {
				500: "var(--warning-500)",
				900: "var(--warning-900)",
			},
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		fontFamily: {
			sans: ["var(--font-sans)", "sans-serif"],
			mono: ["var(--font-mono)", "monospace"],
		},
		extend: {
			spacing: {
				"header-height": "var(--header-height)",
				"sidebar-height": "calc(100vh - var(--header-height))",
				"offset-top": "calc(var(--header-height) + 18px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0, opacity: 0 },
					to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
					to: { height: 0, opacity: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.3s ease-out",
				"accordion-up": "accordion-up 0.3s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
