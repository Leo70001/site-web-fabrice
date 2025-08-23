// src/app/temoignages/page.tsx
import { client } from '@/lib/sanity';
import SEO from "@/components/SEO";
import { businessSchema } from "@/seoData";

interface Testimonial {
  _id: string;
  name: string;
  text: string;
}

// Fonction qui récupère les témoignages approuvés, les plus récents d'abord
async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && isApproved == true] | order(_createdAt desc)`;
  // Disables the cache to always fetch the latest testimonials
  return await client.fetch(query, {}, { cache: 'no-store' });
}

export default async function TemoignagesPage() {
  const testimonials = await getApprovedTestimonials();

  return (
    <>
      <SEO
        title="Contact - Fabrice Lemaitre Magnétiseur"
        description="Prenez rendez-vous avec Fabrice Lemaitre, magnétiseur et coupeur de feu à Combles."
        keywords="contact magnétiseur Combles, rendez-vous magnétiseur Somme"
        image="/images/fabrice4.jpg"
        url="https://www.coupeur-de-feu-magnetiseur-fabrice-lemaitre.fr/temoignages"
        structuredData={businessSchema}
      />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
            Témoignages
          </h1>
          <p className="mt-4 text-lg ">
            Les retours authentiques des personnes que j&apos;ai eu le plaisir d&apos;accompagner.
          </p>
        </header>

        <section className="mt-16 space-y-8 max-w-3xl mx-auto">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <article
                key={testimonial._id}
                className="bg-[var(--magn_bg)] p-6 rounded-lg shadow-md border-l-4 border-[var(--accent)]"
              >
                <p className="text-lg italic ">&quot;{testimonial.text}&quot;</p>
                <p className="text-right font-bold mt-4 text-[var(--primary)]">— {testimonial.name}</p>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-600">
              Aucun témoignage n’a encore été publié.
            </p>
          )}
        </section>

        {/* A thank you section or a call for testimonials could be added here if needed */}
      </div>
    </>
  );
}
