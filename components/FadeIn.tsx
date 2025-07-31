// src/components/FadeIn.tsx
'use client';

import { motion } from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
};

export default function FadeIn({ children, className }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}