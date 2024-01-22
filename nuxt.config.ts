// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


	devtools: { enabled: false },

	css: [
		'~/assets/css/main.css',
		'~/node_modules/commons_front/src/css/_corporate_colors.css',
	],

	modules: [ '@nuxtjs/tailwindcss' ],

	tailwindcss: {},

	//  Variables public se mestra, las demás quedan en backend
	
	runtimeConfig: {
		// The private keys which are only available server-side
		//   apiSecret: '123',
		// Keys within public are also exposed client-side
		public: {
			appBase: process.env.APP_URL,
			apiBase: process.env.API_URL,
		}
	}


})
