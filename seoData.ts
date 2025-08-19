// seoData.ts
export const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fabrice Lemaitre",
    image: "https://www.coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr/images/fabrice.jpg",
    description: "Magnétiseur et coupeur de feu à Combles (Somme), intervenant également dans les environs comme Albert et Péronne.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "28 bis rue de Péronne",
        addressLocality: "Combles",
        postalCode: "80360",
        addressRegion: "Hauts-de-France",
        addressCountry: "FR",
    },
    telephone: "+33643618280",
    url: "https://www.coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr/contact",
    areaServed: [
        {
            "@type": "Place",
            name: "Combles"
        },
        {
            "@type": "Place",
            name: "Albert"
        },
        {
            "@type": "Place",
            name: "Péronne"
        }
    ],
    keywords: "magnétiseur Combles, coupeur de feu Combles, magnétiseur Albert, coupeur de feu Albert, magnétiseur Péronne",
};
