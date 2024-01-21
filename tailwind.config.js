const srcDir = '.'

/** @type {import('tailwindcss').Config} */
export default {

	prefix: 'tw-',

	theme: {
		extend: {
			colors: {
				'iceoblue': 'var(--Iceo-space-cadet)',
				'iceogray': 'var(--Iceo-french-gray)',
				'iceoorange': 'var(--Iceo-orange-peel)',
				'iceorosa': 'var(--Iceo-bittersweet)',
				'iceogreen': 'var(--Iceo-light-green)',
				'iceobluearg': 'var(--Iceo-ruddy-blue)',
				'iceoviolet': 'var(--Iceo-grape)',
				'iceoblack': 'var(--Iceo-eerie-black)',
				'iceoblanco': 'var(--Iceo-seasalt)',
			},
		},
	},

	plugins: [],

	content: [
		`${srcDir}/components/**/*.{vue,js,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/composables/**/*.{js,ts}`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/utils/**/*.{js,ts}`,
		`${srcDir}/App.{js,ts,vue}`,
		`${srcDir}/app.{js,ts,vue}`,
		`${srcDir}/Error.{js,ts,vue}`,
		`${srcDir}/error.{js,ts,vue}`,
		`${srcDir}/app.config.{js,ts}`
	]

}
