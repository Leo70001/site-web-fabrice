// src/app/temoignages/page.tsx
import { client } from '@/lib/sanity'

interface Testimonial {
  _id: string;
  name: string;
  text: string;
}

// On modifie la fonction pour récupérer les données les plus récentes
async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial" && isApproved == true] | order(_createdAt desc)`;

  // AJOUT : On ajoute l'option { cache: 'no-store' } pour forcer la récupération des données fraîches
  const testimonials = await client.fetch(query, {}, { cache: 'no-store' });

  return testimonials;
}

export default async function TemoignagesPage() {
  const testimonials = await getApprovedTestimonials();

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--primary)] sm:text-5xl">
          Témoignages
        </h1>
        <p className="mt-4 text-lg">
          Les retours authentiques des personnes que j'ai eu le plaisir d'accompagner.
        </p>
      </div>

      <div className="mt-16 space-y-8 max-w-3xl mx-auto">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--accent)]">
              <p className="text-lg italic">"{testimonial.text}"</p>
              <p className="text-right font-bold mt-4 text-[var(--primary)]">- {testimonial.name}</p>
            </div>
          ))
        ) : (
          <p className="text-center">Aucun témoignage publié pour le moment.</p>
        )}
      </div>

      {/* Votre section Remerciements peut rester ici */}
    </div>
  );
}