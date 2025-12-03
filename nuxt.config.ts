import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 build: {
					transpile: ['vuetify'],
	},

 devtools: { enabled: false },

 css: [
					'~/assets/css/main.css',
	],

 vite: {
					vue: {
									template: {
													transformAssetUrls,
									},
					},
	},

 modules: [ 
					'@nuxtjs/tailwindcss',
					(_options, nuxt) => {
									nuxt.hooks.hook('vite:extendConfig', (config) => {
											// @ts-expect-error
									config.plugins.push(vuetify({ autoImport: true }))
					})
					},
	],

 tailwindcss: {},

 //  Variables public se mestra, las demás quedan en backend

	runtimeConfig: {
					// The private keys which are only available server-side
					//   apiSecret: '123',
					// Keys within public are also exposed client-side
					public: {
									appBase: process.env.APP_URL,
									apiBase: process.env.API_URL,
									appId: process.env.APP_ID
					}
	},

 compatibilityDate: '2025-06-23'
})