<script setup lang="ts">
const capabilities = [
    { number: '01', title: 'Toda la información, en contexto', text: 'Conectá los datos que hoy viven separados y transformalos en una lectura simple de tu empresa.', accent: 'blue' },
    { number: '02', title: 'La operación, en automático', text: 'Dejá que los módulos y agentes se ocupen de tareas repetitivas, controles y seguimientos.', accent: 'orange' },
    { number: '03', title: 'Tu equipo, enfocado en crecer', text: 'Menos tiempo apagando incendios. Más tiempo para clientes, estrategia y nuevas oportunidades.', accent: 'green' },
]
</script>
<template>
    <section id="como-funciona" class="explanation-section"><div class="site-container">
        <div class="statement-grid">
            <div><span class="section-kicker">Una forma más inteligente de trabajar</span><h2 class="section-title">Ser empresario debería ser <strong>divertido, apasionante y desafiante.</strong></h2></div>
            <div class="statement-copy"><p>Con IceO vas a tener a tu alcance la información, los diseños, los tableros, las automatizaciones y las configuraciones necesarias para olvidarte de los problemas de la operación diaria.</p><p class="font-semibold text-iceoblue">Volvé a disfrutar la adrenalina de emprender, generar valor para tus clientes y hacer crecer tu empresa.</p></div>
        </div>
        <div class="capabilities-grid">
            <article v-for="item in capabilities" :key="item.number" class="capability-card" :class="`accent-${item.accent}`"><div class="card-number">{{ item.number }}</div><div class="card-graphic" aria-hidden="true"><span></span><span></span><span></span></div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article>
        </div>
        <div class="integration-strip"><div class="integration-copy"><span class="integration-mark">+</span><div><h3>No necesitás empezar de cero.</h3><p>IceO se integra con las herramientas y sistemas que tu equipo ya conoce.</p></div></div><a href="#form-contact" class="text-link text-iceoblue">Conversemos sobre tu empresa <span aria-hidden="true">→</span></a></div>
    </div></section>
</template>
