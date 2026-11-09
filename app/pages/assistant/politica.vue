<script lang="ts" setup>
import { marked } from 'marked'
import privacyPolicy from './POLITICA_PRIVACIDAD_MIA.md?raw'

definePageMeta({
    layout: 'blank'
})

useSeoMeta({
    title: 'Política de Privacidad de Mia | IceO',
    description: 'Política de privacidad de Mia, la asistente de IA de IceO: qué datos usa, para qué y cómo se protegen.',
    ogTitle: 'Política de Privacidad de Mia | IceO',
    ogDescription: 'Política de privacidad de Mia, la asistente de IA de IceO: qué datos usa, para qué y cómo se protegen.',
})

const renderedPolicy = marked.parse(privacyPolicy, { async: false })
</script>

<template>
    <main class="container my-5">
        <article class="row">
            <div
                class="privacy-policy col-12 col-lg-10"
                v-html="renderedPolicy"
            />
        </article>
    </main>
</template>

<style scoped>
.privacy-policy :deep(h1) {
    margin-bottom: 1.5rem;
}

.privacy-policy :deep(h2) {
    margin-bottom: 1rem;
    margin-top: 1.5rem;
}

.privacy-policy :deep(h3) {
    margin-bottom: 0.75rem;
    margin-top: 1.25rem;
}

.privacy-policy :deep(ul) {
    list-style: disc;
    margin-bottom: 1rem;
    padding-left: 2rem;
}

.privacy-policy :deep(p) {
    margin-bottom: 1rem;
}

.privacy-policy :deep(a) {
    color: var(--bs-link-color, #0d6efd);
    text-decoration: underline;
}
</style>
