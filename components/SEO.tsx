// components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    structuredData?: object;
}

export default function SEO({ title, description, keywords, image, url, structuredData }: SEOProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {url && <link rel="canonical" href={url} />}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}
        </Head>
    );
}
