# TODO — iceo-site

## Ideas de mensaje

- [ ] Evaluar **"El sistema operativo de empresas."** como frase para ICEO.
      Viene del banco de frases de intracompany-site (2026-11-09), donde se
      usaba como claim en las descripciones. Ver la Brújula §B2 en
      `../intracompany-site/TODO-COMERCIAL.md`.

## Páginas por sistema

- [ ] Desarrollar una página por sistema en iceo.com.ar: CRM, SCM, MMS, QMS,
      CPM · BI (y los que se sumen: ERP, RRHH, HyS, COMEX…). intracompany-site
      las va a enlazar desde las cards de áreas de `/tecnologia` (ver
      `../intracompany-site/TODO.md` §4). Usar los mismos nombres y funciones
      que muestra intracompany-site (`app/data/soluciones.ts` → `verticales`).

## Pendientes

- [ ] Conciliar link desde intracompany: revisar que los enlaces de
      intracompany-site a iceo.com.ar apunten a rutas que existan.
- [ ] Detallar features.
- [ ] Separar pages por cada área de la empresa (relacionado con
      "Páginas por sistema").

## Mejoras detectadas al sacar Vuetify (2026-11-09)

- [ ] **Feedback del formulario de contacto**: hoy `store()` en
      `app/components/site/Contact.vue` solo hace `console.log`/`console.error`;
      el usuario no ve si la consulta se envió o falló. Mostrar mensaje de
      éxito/error, deshabilitar el botón mientras envía y limpiar el form al
      terminar. Prioridad alta: es la conversión del sitio.
- [ ] **Estilar páginas legales**: `privacidad.vue`, `terminos.vue` y
      `assistant/politica.vue` usan clases de Bootstrap (`row`, `col-12`,
      `col-lg-10`, `text-muted`) que no existen en el proyecto, por eso se ven
      sin estilo (títulos sin jerarquía, listas sin viñetas). Pasarlas a
      Tailwind, idealmente con `@tailwindcss/typography` (`prose`).
- [ ] **Mantener `public/sitemap.xml`**: es estático; al sumar páginas (p. ej.
      las de cada sistema) hay que agregarlas a mano, o pasar a `@nuxtjs/sitemap`
      cuando haya varias.
