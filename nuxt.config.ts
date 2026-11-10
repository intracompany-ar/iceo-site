// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://iceo.com.ar'
const siteTitle = 'IceO | Software e IA para potenciar tu empresa'
const siteDescription = 'IceO conecta los sistemas que ya usás y los potencia con más de 70 módulos y agentes de IA para automatizar procesos, ordenar datos y tomar mejores decisiones.'

export default defineNuxtConfig({
	devtools: { enabled: false },

	css: [
		'~/assets/css/main.css',
	],

	app: {
		head: {
			htmlAttrs: { lang: 'es-AR' },
			title: siteTitle,
			meta: [
				{ name: 'description', content: siteDescription },
				{ name: 'theme-color', content: '#172554' },
				{ property: 'og:site_name', content: 'IceO' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:locale', content: 'es_AR' },
				{ property: 'og:title', content: siteTitle },
				{ property: 'og:description', content: siteDescription },
				{ property: 'og:image', content: `${siteUrl}/og-image.png` },
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' },
				{ property: 'og:image:alt', content: 'IceO — Software e inteligencia artificial para empresas' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: siteTitle },
				{ name: 'twitter:description', content: siteDescription },
				{ name: 'twitter:image', content: `${siteUrl}/og-image.png` },
				{ name: 'twitter:image:alt', content: 'IceO — Software e inteligencia artificial para empresas' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',
	],

	tailwindcss: {},

	postcss: {
		plugins: {
			// No usamos CSS anidado; con Nuxt 4.5 este plugin no resuelve y solo genera un warning
			'tailwindcss/nesting': false,
		},
	},

	//  Variables public se mestra, las demás quedan en backend
	runtimeConfig: {
		// The private keys which are only available server-side
		//   apiSecret: '123',
		// Keys within public are also exposed client-side
		public: {
			appBase: process.env.APP_URL,
			apiBase: process.env.API_URL,
			appId: process.env.APP_ID,
			// URL pública canónica (para canonical, og:url y sitemap). Se puede pisar con NUXT_PUBLIC_SITE_URL
			siteUrl,
		},
	},

	compatibilityDate: '2025-06-23',
})
