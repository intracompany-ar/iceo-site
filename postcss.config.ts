// postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-import': {
            // path: ['./node_modules/commons_front/src/css/_corporate_colors.css'], Al final con agregarlo e nuxt.config.ts es suficiente
        },
    },
};