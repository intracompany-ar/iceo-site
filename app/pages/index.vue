<script setup lang="ts">
definePageMeta({ layout: 'blank' })
const { public: { siteUrl } } = useRuntimeConfig()
const links = [{ label: 'Inicio', to: '#inicio' }, { label: 'Cómo funciona', to: '#como-funciona' }]
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'IceO', url: `${siteUrl}/`, logo: { '@type': 'ImageObject', url: `${siteUrl}/iceo-logo.png`, width: 1254, height: 1254 }, parentOrganization: { '@type': 'Organization', name: 'Intra Company SAS' } }, { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'IceO', url: `${siteUrl}/`, inLanguage: 'es-AR', publisher: { '@id': `${siteUrl}/#organization` } }] }) }] })
</script>

<template>
    <div class="site-shell">
        <header class="site-header">
            <nav class="site-container flex h-full items-center justify-between" aria-label="Navegación principal">
                <a href="#inicio" class="brand-lockup" aria-label="IceO, ir al inicio">
                    <img src="~/assets/img/logos/iceo-logo-hero-transparent.png" alt="" width="50" height="50">
                    <span>Ice<span class="font-extrabold">O</span></span>
                </a>
                <div class="hidden items-center gap-8 md:flex">
                    <a v-for="link in links" :key="link.to" :href="link.to" class="nav-link">{{ link.label }}</a>
                </div>
                <a href="#form-contact" class="button button-dark button-small">Hablemos <span aria-hidden="true">↗</span></a>
            </nav>
        </header>
        <main><SiteBanner /><SiteExplicacion /><SiteContact /></main>
        <footer class="site-footer">
            <div class="site-container">
                <div class="footer-top">
                    <a href="#inicio" class="brand-lockup text-white" aria-label="IceO, volver al inicio">
                        <img src="~/assets/img/logos/iceo-logo-hero-transparent.png" alt="" width="42" height="42">
                        <span>Ice<span class="font-extrabold">O</span></span>
                    </a>
                    <p>Más claridad. Menos operación.<br>Una empresa que avanza.</p>
                    <nav class="footer-links" aria-label="Pie de página"><NuxtLink to="/privacidad">Privacidad</NuxtLink><NuxtLink to="/terminos">Términos</NuxtLink></nav>
                </div>
                <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} IceO</span><span>Una solución de Intra Company SAS</span></div>
            </div>
        </footer>
    </div>
</template>
