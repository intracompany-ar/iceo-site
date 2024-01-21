// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


	devtools: { enabled: false },

	css: [
		'~/assets/css/main.css',
		'~/node_modules/commons_front/src/css/_corporate_colors.css',
	],

	modules: [ '@nuxtjs/tailwindcss' ],

	tailwindcss: {}

})
