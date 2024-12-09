<script setup ts>
definePageMeta({
    layout: 'blank'
})

const links = ref([
    'Home',
    // 'Nosotros',
    // 'Intra Company SA',
    // 'Características',
    // 'Contacto',
])

const goToForm = () => {
    const element = document.getElementById('form-contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<template>
    <v-app-bar class="p-2">
        <template v-slot:prepend>
            <NuxtLink to="/" class="no-underline flex items-center">
                <img src="~/assets/img/logos/iceov2_196x196.png" alt="" width="30" height="30">
                <span class="ml-2">IceO</span>
            </NuxtLink>
        </template>

        <v-btn v-on:click.prevent="goToForm">
            CONTACTANOS
        </v-btn>
    </v-app-bar>

    <v-main>
        <SiteBanner />

        <SiteExplicacion />

        <SiteContact />
        <!-- <NuxtWelcome /> -->
    </v-main>

        
    <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link"
                class="mx-2"
                color="white"
                rounded="xl"
                variant="text"
            >
                <small>{{ link }}</small>
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Iceo</strong>
                <small>- Desarrollado por Intra Company SA</small>
            </v-col>
        </v-row>
    </v-footer>
</template>