<script setup lang="ts">
definePageMeta({
    layout: 'blank'
})

const { public: { siteUrl } } = useRuntimeConfig()

const links = [
    { label: 'Home', to: '/' },
    { label: 'Privacidad', to: '/privacidad' },
    { label: 'Términos', to: '/terminos' },
]

// Datos estructurados para buscadores (schema.org)
useHead({
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Organization',
                    '@id': `${siteUrl}/#organization`,
                    name: 'IceO',
                    url: `${siteUrl}/`,
                    logo: `${siteUrl}/og-image.png`,
                    parentOrganization: { '@type': 'Organization', name: 'Intra Company SAS' },
                },
                {
                    '@type': 'WebSite',
                    '@id': `${siteUrl}/#website`,
                    name: 'IceO',
                    url: `${siteUrl}/`,
                    inLanguage: 'es-AR',
                    publisher: { '@id': `${siteUrl}/#organization` },
                },
            ],
        }),
    }],
})
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50 flex h-20 items-start bg-[#fffbfe] py-2 pl-2">
        <div class="flex h-16 w-full items-center justify-between">
            <NuxtLink to="/" class="ml-1 flex items-center" aria-label="IceO, ir al inicio">
                <img src="~/assets/img/logos/iceo-logo-64.webp" alt="" width="30" height="30">
                <span class="ml-2">IceO</span>
            </NuxtLink>

            <a href="#form-contact"
                class="mr-1 inline-flex h-9 min-w-16 items-center rounded-3xl px-4 text-sm font-medium uppercase tracking-[1.25px] transition-colors hover:bg-black/[.04] focus-visible:bg-black/[.12] focus-visible:outline-none">
                Contactanos
            </a>
        </div>
    </header>

    <main class="pt-16">
        <SiteBanner />

        <SiteExplicacion />

        <SiteContact />
    </main>

    <footer class="bg-[#bdbdbd] px-4 py-2">
        <nav class="flex flex-wrap justify-center" aria-label="Pie de página">
            <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="mx-2 inline-flex h-9 min-w-16 items-center justify-center rounded-3xl px-4 text-[11.2px] font-medium uppercase tracking-[1.25px] text-white transition-colors hover:bg-white/[.08] focus-visible:bg-white/[.16] focus-visible:outline-none"
            >
                {{ link.label }}
            </NuxtLink>
        </nav>
        <p class="mt-4 text-center">
            {{ new Date().getFullYear() }} — <strong>Iceo</strong>
            <small>- Desarrollado por Intra Company SAS</small>
        </p>
    </footer>
</template>
