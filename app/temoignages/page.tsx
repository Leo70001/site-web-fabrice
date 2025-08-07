// src/app/temoignages/page.tsx
import { client } from '@/lib/sanity';

interface Testimonial {
  _id: string;
  name: string;
  text: string;
}

// Fonction qui récupère les témoignages approuvés, les plus récents d'abord
async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && isApproved == true] | order(_createdAt desc)`;
  return await client.fetch(query, {}, { cache: 'no-store' }); // désactive le cache pour toujours avoir les derniers
}

export default async function TemoignagesPage() {
  const testimonials = await getApprovedTestimonials();

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
          Témoignages
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Les retours authentiques des personnes que j'ai eu le plaisir d'accompagner.
        </p>
      </header>

      <section className="mt-16 space-y-8 max-w-3xl mx-auto">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <article
              key={testimonial._id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--accent)]"
            >
              <p className="text-lg italic text-gray-800">"{testimonial.text}"</p>
              <p className="text-right font-bold mt-4 text-[var(--primary)]">— {testimonial.name}</p>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-600">
            Aucun témoignage n’a encore été publié.
          </p>
        )}
      </section>

      {/* On pourra ajouter une section de remerciements ou un appel à témoignage ici si besoin */}
    </div>
  );
}
