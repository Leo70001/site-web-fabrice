// postcss.config.mjs (à la racine)

export default {
  plugins: [
    '@tailwindcss/postcss', // On utilise le nouveau paquet
    'autoprefixer',
  ],
};