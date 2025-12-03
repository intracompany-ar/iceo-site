<script lang="ts" setup>
definePageMeta({
    layout: 'blank'
})

const lastUpdate = '2025-12-02'
</script>

<template>
    <div class="container my-5">
        <!-- ========================================= -->
        <!-- ========== TÉRMINOS DE SERVICIO ========= -->
        <!-- ========================================= -->
        <section id="terms-of-service" class="mb-5">
            <div class="row">
            <div class="col-12 col-lg-10">
                <h1 class="mb-4">Términos de Servicio – Iceo ERP</h1>
                <p class="text-muted">Última actualización: {{ lastUpdate }}</p>

                <h2 class="mt-4 mb-3">1. Objeto del Contrato</h2>
                <p>
                El presente contrato regula el acceso y uso de la plataforma <strong>Iceo ERP</strong> y todos sus módulos,
                servicios, API, integraciones, entornos y documentación asociada (en adelante, “LA PLATAFORMA”), provista bajo
                la modalidad Software as a Service (“SaaS”). La aceptación expresa o tácita del cliente (“EL CLIENTE”)
                constituye plena conformidad con el presente.
                </p>

                <h2 class="mt-4 mb-3">2. Naturaleza del Servicio – Modalidad SaaS</h2>
                <p>LA PLATAFORMA se provee exclusivamente mediante acceso remoto. En consecuencia:</p>
                <ul>
                <li>No se transfiere la propiedad del software, ni del código fuente, ni de las bases de datos, ni de los modelos de información.</li>
                <li>EL CLIENTE adquiere únicamente un derecho de uso limitado, condicionado y revocable.</li>
                <li>El acceso depende de infraestructura cloud y conectividad provista por terceros ajenos al LICENCIANTE.</li>
                </ul>

                <h2 class="mt-4 mb-3">3. Concesión de la Licencia de Uso</h2>
                <p>
                El LICENCIANTE otorga a EL CLIENTE, mientras mantenga una suscripción activa, una licencia limitada, no
                exclusiva, no transferible y revocable, para acceder y utilizar LA PLATAFORMA para sus fines internos, e
                incorporar usuarios finales (“Usuarios Autorizados”) conforme al plan contratado.
                </p>
                <p><strong>Queda estrictamente prohibido:</strong></p>
                <ul>
                <li>Crear usuarios genéricos, impersonales o compartidos.</li>
                <li>Ceder, sublicenciar, alquilar o prestar accesos.</li>
                <li>Intentar acceder a partes del sistema no autorizadas.</li>
                <li>Copiar o replicar estructuras internas, pantallas, diagramas, consultas o lógicas de negocio.</li>
                </ul>

                <h2 class="mt-4 mb-3">4. Propiedad Intelectual</h2>
                <p>
                LA PLATAFORMA, incluyendo su arquitectura, código, diseño UX/UI, modelos de datos, documentación, manuales,
                API, integraciones, planes contables, lógica funcional y cualquier componente asociado, constituye obra
                intelectual protegida conforme Ley 11.723, tratados internacionales y normativa vigente.
                </p>
                <ul>
                <li>EL CLIENTE no adquiere derecho alguno de propiedad intelectual.</li>
                <li>
                    Toda ingeniería inversa, descompilación, scraping, extracción de datos estructurales o clonación funcional
                    queda prohibida.
                </li>
                <li>
                    El incumplimiento faculta al LICENCIANTE a exigir daños y perjuicios, con un mínimo equivalente al valor de
                    tantas licencias anuales como usuarios involucrados, sin perjuicio de acciones civiles y penales.
                </li>
                </ul>

                <h2 class="mt-4 mb-3">5. Obligaciones del Cliente</h2>
                <p>EL CLIENTE será responsable por:</p>
                <ul>
                <li>La veracidad, exactitud y licitud de los datos que incorpore.</li>
                <li>Gestionar permisos, roles y accesos internos, incluyendo altas, bajas y auditoría de usuarios.</li>
                <li>Garantizar que los Usuarios Autorizados conozcan y cumplan el presente contrato.</li>
                <li>Mantener la confidencialidad de credenciales y accesos.</li>
                <li>Mantener sus sistemas internos en condiciones compatibles con LA PLATAFORMA.</li>
                </ul>

                <h2 class="mt-4 mb-3">6. Confidencialidad</h2>
                <p>
                Cada parte se obliga a conservar estricta confidencialidad respecto de información técnica, comercial,
                operativa o financiera, lógica interna del ERP, diagramas, configuraciones, workflows y modelos de datos. Esta
                obligación subsistirá por un plazo mínimo de cinco (5) años luego de la terminación del contrato.
                </p>

                <h2 class="mt-4 mb-3">7. Niveles de Servicio y Disponibilidad</h2>
                <p>
                El LICENCIANTE provee LA PLATAFORMA bajo estándares razonables de disponibilidad, monitoreo y uptime. No se
                garantiza disponibilidad absoluta, pudiendo existir interrupciones programadas o incidentes originados en
                terceros (proveedores cloud, ISPs, ataques, etc.). Los mantenimientos programados se notificarán con
                antelación razonable.
                </p>

                <h2 class="mt-4 mb-3">8. Soporte Técnico</h2>
                <p>
                El soporte se brinda según el plan contratado e incluye, según corresponda, tickets, chat, documentación y
                capacitaciones opcionales. No incluye consultoría contable o administrativa, ni desarrollo a medida que no
                esté expresamente contemplado.
                </p>

                <h2 class="mt-4 mb-3">9. Seguridad y Responsabilidad sobre los Datos</h2>
                <p>
                El LICENCIANTE implementa medidas razonables de seguridad conforme buenas prácticas y estándares del sector
                (cifrado, auditorías, backups administrados según plan, control de accesos, etc.). No obstante, EL CLIENTE
                reconoce que ningún sistema es totalmente invulnerable.
                </p>
                <p><strong>El LICENCIANTE no será responsable por:</strong></p>
                <ul>
                <li>Errores, omisiones o pérdidas de datos imputables a EL CLIENTE.</li>
                <li>Acciones de usuarios internos de EL CLIENTE.</li>
                <li>Daños indirectos, lucro cesante, pérdida de chance o reputación.</li>
                <li>Integraciones externas que EL CLIENTE active por su cuenta.</li>
                </ul>
                <p>
                La responsabilidad máxima del LICENCIANTE frente a EL CLIENTE se limita al monto total efectivamente abonado
                por EL CLIENTE en concepto de servicios en los doce (12) meses inmediatos anteriores al evento que dé origen
                al reclamo.
                </p>

                <h2 class="mt-4 mb-3">10. Integraciones y Terceros</h2>
                <p>
                EL CLIENTE consiente que LA PLATAFORMA interactúe con servicios de terceros (por ejemplo, ecommerce, bancos,
                AFIP, pasarelas de pago, suites de productividad). El LICENCIANTE no será responsable por fallas, cambios de
                API, interrupciones o errores de datos provenientes de dichos servicios.
                </p>

                <h2 class="mt-4 mb-3">11. Precios, Pagos y Renovaciones</h2>
                <ul>
                <li>La suscripción puede ser mensual, anual o en otro esquema que se acuerde contractualmente.</li>
                <li>La falta de pago en término genera suspensión automática del servicio.</li>
                <li>Los valores podrán actualizarse con aviso previo razonable.</li>
                <li>La reactivación del servicio puede implicar cargos administrativos adicionales.</li>
                </ul>

                <h2 class="mt-4 mb-3">12. Rescisión</h2>
                <p>El contrato podrá rescindirse:</p>
                <ul>
                <li>
                    Por EL CLIENTE, en cualquier momento y sin expresión de causa, notificando con al menos treinta (30) días
                    corridos de anticipación.
                </li>
                <li>
                    Por EL LICENCIANTE, en caso de incumplimiento contractual, uso abusivo o ilícito de LA PLATAFORMA, o
                    imposibilidad de continuidad del servicio por causas ajenas al mismo.
                </li>
                </ul>
                <p>
                Al finalizar la relación contractual se revocarán los accesos a LA PLATAFORMA. EL CLIENTE podrá solicitar la
                exportación de sus datos en formatos estándar dentro de los plazos que se informen al efecto. Transcurrido el
                plazo legal de conservación, la información será eliminada mediante procedimientos seguros.
                </p>

                <h2 class="mt-4 mb-3">13. Jurisdicción y Ley Aplicable</h2>
                <p>
                Las partes acuerdan someter cualquier controversia derivada de la interpretación o ejecución del presente a
                los Tribunales Ordinarios de la Ciudad de Rosario, Provincia de Santa Fe, República Argentina, con
                renuncia expresa a cualquier otro fuero o jurisdicción que pudiera corresponder.
                </p>
            </div>
            </div>
        </section>
    </div>
</template>