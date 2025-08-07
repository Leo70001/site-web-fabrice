// studio/schemas/testimonial.ts
import { defineType, defineField, Rule } from 'sanity';

// It's best practice to define the schema object before exporting it.
const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Témoignages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la personne',
      type: 'string',
      // Provide the correct type for the validation rule.
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texte du témoignage',
      type: 'text',
      // Provide the correct type for the validation rule.
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'isApproved',
      title: 'Approuvé pour publication',
      type: 'boolean',
      description: "Le témoignage n'apparaîtra sur le site que si cette case est cochée.",
      // By default, a new testimonial is not approved.
      initialValue: false,
    }),
  ],
});

export default testimonialSchema;
