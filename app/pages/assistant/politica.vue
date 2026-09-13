<script lang="ts" setup>
definePageMeta({
    layout: 'blank'
})

const lastUpdate = '2026-09-13'
</script>

<template>
    <div class="container my-5">
        <!-- ========================================= -->
        <!-- === POLÍTICA DE PRIVACIDAD DEL ASISTENTE == -->
        <!-- ========================================= -->
        <section id="assistant-privacy-policy" class="mb-5">
            <div class="row">
            <div class="col-12 col-lg-10">
                <h1 class="mb-4">Política de Privacidad – Asistente IceO (WhatsApp / Telegram)</h1>
                <p class="text-muted">Última actualización: {{ lastUpdate }}</p>

                <p>
                Esta política aplica específicamente al asistente conversacional de IceO que opera a través de
                WhatsApp y Telegram (en adelante, "el Asistente"). Complementa, sin reemplazar, la
                <NuxtLink to="/privacidad">Política de Privacidad general de Iceo ERP</NuxtLink>.
                </p>

                <h2 class="mt-4 mb-3">1. Responsable del Tratamiento</h2>
                <p>
                El responsable del tratamiento de los datos personales procesados por el Asistente es Alejandro
                Palarich, en su carácter de LICENCIANTE de LA PLATAFORMA Iceo ERP, con domicilio en Av. Libertad 798,
                San Gregorio, Santa Fe, Argentina, y correo electrónico de contacto
                <a href="mailto:info@iceo.ar">info@iceo.ar</a>, conforme a la Ley 25.326 de Protección de Datos
                Personales y demás normativa aplicable.
                </p>

                <h2 class="mt-4 mb-3">2. Datos que Procesa el Asistente</h2>
                <ul>
                <li>Número de teléfono y, cuando el canal lo provee, nombre de perfil (de WhatsApp o Telegram).</li>
                <li>Contenido de los mensajes de texto (y, cuando esté habilitado, mensajes de voz transcriptos) que el usuario le envía al Asistente.</li>
                <li>Metadatos de la conversación: fecha y hora de cada mensaje, estado de entrega/lectura, identificador del mensaje.</li>
                <li>Cuando corresponda, la vinculación de esa identidad de WhatsApp/Telegram con un usuario o cliente ya existente en Iceo ERP.</li>
                </ul>

                <h2 class="mt-4 mb-3">3. Finalidad del Tratamiento</h2>
                <p>Estos datos se utilizan para:</p>
                <ul>
                <li>Generar y enviar una respuesta automatizada mediante inteligencia artificial a la consulta del usuario.</li>
                <li>Mantener el historial de la conversación para dar contexto a respuestas posteriores.</li>
                <li>Derivar la conversación a un operador humano cuando el Asistente no pueda resolverla, o el usuario lo solicite.</li>
                <li>Registrar y auditar el funcionamiento del Asistente (detección de errores, medición de calidad de respuestas).</li>
                </ul>

                <h2 class="mt-4 mb-3">4. Uso de Inteligencia Artificial y Subprocesadores</h2>
                <p>
                Para generar sus respuestas, el Asistente envía el mensaje del usuario (y el historial reciente de la
                conversación) a proveedores de modelos de lenguaje de terceros (por ejemplo, Anthropic u OpenAI).
                Estos proveedores procesan ese contenido únicamente para producir la respuesta solicitada, conforme a
                sus propias políticas de privacidad y retención.
                </p>
                <p>
                Además de esos proveedores de IA, intervienen como subprocesadores: Meta (WhatsApp Business
                Platform) y/o Telegram, según el canal por el que se recibió el mensaje, y el proveedor de
                infraestructura/hosting donde corre el Asistente.
                </p>

                <h2 class="mt-4 mb-3">5. El Canal (WhatsApp/Telegram) Tiene sus Propias Reglas</h2>
                <p>
                El envío y la recepción de mensajes viaja a través de la plataforma de WhatsApp Business de Meta o de
                la API de Telegram, según corresponda. El uso de esos canales está sujeto además a las políticas de
                privacidad y condiciones de servicio propias de Meta/WhatsApp y de Telegram, que el usuario acepta al
                usar esas aplicaciones independientemente de este Asistente.
                </p>

                <h2 class="mt-4 mb-3">6. Base Legal del Tratamiento</h2>
                <p>
                El tratamiento se basa en la ejecución del servicio solicitado por el usuario al escribirle al
                Asistente, en el interés legítimo de brindar y mejorar ese servicio, y en el cumplimiento de
                obligaciones legales cuando corresponda.
                </p>

                <h2 class="mt-4 mb-3">7. Conservación y Eliminación</h2>
                <p>
                El historial de conversación se conserva mientras sea necesario para prestar el servicio y dar
                contexto a futuras interacciones. Un usuario puede solicitar la eliminación de su historial de
                conversación con el Asistente a través de los canales de contacto indicados en la sección 9.
                </p>

                <h2 class="mt-4 mb-3">8. Derechos de los Titulares de los Datos</h2>
                <p>
                Los titulares de los datos personales podrán ejercer, en los términos de la Ley 25.326 y normativa
                complementaria, los derechos de acceso, rectificación, actualización, supresión cuando corresponda,
                oposición, portabilidad y limitación del tratamiento, además de solicitar dejar de recibir respuestas
                automatizadas del Asistente.
                </p>

                <h2 class="mt-4 mb-3">9. Contacto</h2>
                <p>
                Para ejercer estos derechos, consultar sobre el tratamiento de datos del Asistente, o solicitar la
                baja/eliminación de una conversación, el usuario puede escribir a
                <a href="mailto:info@iceo.ar">info@iceo.ar</a>, dirigirse al domicilio Av. Libertad 798, San
                Gregorio, Santa Fe, Argentina, o utilizar los canales de contacto oficiales publicados en
                <NuxtLink to="/">iceo.ar</NuxtLink>.
                </p>

                <h2 class="mt-4 mb-3">10. Actualizaciones de esta Política</h2>
                <p>
                Esta política podrá ser modificada o actualizada. La versión vigente es siempre la publicada en esta
                misma dirección.
                </p>
            </div>
            </div>
        </section>
    </div>
</template>
