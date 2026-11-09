<script setup lang="ts">
const route = useRoute()
const { public: { siteUrl } } = useRuntimeConfig()

// URL canónica por página (evita contenido duplicado con / sin barra, query strings, etc.)
const canonical = computed(() => siteUrl + (route.path === '/' ? '/' : route.path.replace(/\/$/, '')))

useHead({
	link: [{ rel: 'canonical', href: canonical }],
	meta: [{ property: 'og:url', content: canonical }],
})
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FF99DD0%,#94a3b8 100%)" />
		<NuxtPage />
	</NuxtLayout>
</template>
