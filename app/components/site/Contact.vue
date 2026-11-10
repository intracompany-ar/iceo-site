<script lang="ts" setup>
const config = useRuntimeConfig()
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const formData = ref({ name: '', last_name: '', company: '', email: '', phone_number: '', content: '', country: 'AR', application_id: config.public.appId })
async function store() {
    status.value = 'sending'
    try {
        await $fetch(config.public.apiBase + '/api/ticket/public', { method: 'POST', body: formData.value })
        status.value = 'success'
    } catch { status.value = 'error' }
}
</script>
<template>
    <section id="form-contact" class="contact-section" aria-labelledby="contact-title">
        <div class="contact-orb contact-orb-one" aria-hidden="true"></div><div class="contact-orb contact-orb-two" aria-hidden="true"></div>
        <div class="site-container contact-grid">
            <div class="contact-copy">
                <span class="section-kicker section-kicker-light">El próximo paso</span>
                <h2 id="contact-title">Hagamos que tu empresa <strong>vuele.</strong></h2>
                <p>Contanos dónde sentís que la operación te está frenando. Te mostramos cómo IceO puede integrarse a tu realidad.</p>
                <div class="contact-note"><span>01</span><p>Nos contás sobre tu empresa</p></div>
                <div class="contact-note"><span>02</span><p>Detectamos oportunidades concretas</p></div>
                <div class="contact-note"><span>03</span><p>Diseñamos un camino para avanzar</p></div>
            </div>
            <form class="contact-form" @submit.prevent="store">
                <div class="form-heading"><span>Empecemos</span><span class="form-arrow" aria-hidden="true">↗</span></div>
                <div class="form-grid">
                    <label><span>Nombre *</span><input v-model="formData.name" type="text" autocomplete="given-name" placeholder="Tu nombre" required></label>
                    <label><span>Apellido</span><input v-model="formData.last_name" type="text" autocomplete="family-name" placeholder="Tu apellido"></label>
                    <label class="form-full"><span>Empresa</span><input v-model="formData.company" type="text" autocomplete="organization" placeholder="¿Dónde trabajás?"></label>
                    <label class="form-full"><span>Email *</span><input v-model="formData.email" type="email" autocomplete="email" placeholder="nombre@empresa.com" required></label>
                    <label class="form-full"><span>Teléfono</span><div class="phone-field"><span>AR</span><input v-model="formData.phone_number" type="tel" autocomplete="tel" placeholder="11 1234 5678"></div></label>
                    <label class="form-full"><span>¿Qué te gustaría mejorar? *</span><textarea v-model="formData.content" rows="3" placeholder="Contanos un poco sobre tu desafío..." required></textarea></label>
                </div>
                <button type="submit" class="button button-primary form-submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Enviando...' : 'Enviar consulta' }} <span aria-hidden="true">→</span></button>
                <p v-if="status === 'success'" class="form-status success" role="status">¡Gracias! Recibimos tu consulta y nos vamos a poner en contacto.</p>
                <p v-if="status === 'error'" class="form-status error" role="alert">No pudimos enviar la consulta. Por favor, intentá nuevamente.</p>
                <p class="form-privacy">Al enviar aceptás nuestra <NuxtLink to="/privacidad">política de privacidad</NuxtLink>.</p>
            </form>
        </div>
    </section>
</template>
