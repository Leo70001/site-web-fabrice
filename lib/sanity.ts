// src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2025-07-29', // Date du jour
    useCdn: false, // Mettre à false pour voir les changements en temps réel pendant le développement
})