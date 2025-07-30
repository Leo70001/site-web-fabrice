// studio/schemas/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Témoignages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom de la personne',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Texte du témoignage',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isApproved',
      title: 'Approuvé pour publication',
      type: 'boolean',
      description: "Le témoignage n'apparaîtra sur le site que si cette case est cochée.",
      initialValue: false, // Par défaut, un témoignage n'est pas approuvé
    },
  ],
}