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
			padding: "2rem",
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
			},
			accent: {
				500: "var(--accent-500)",
				600: "var(--accent-600)",
			},
			danger: {
				500: "var(--danger-500)",
				600: "var(--danger-600)",
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
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
