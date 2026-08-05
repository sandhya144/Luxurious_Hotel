import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const ORIGIN = 'https://thewhitehousevaranasi.in';

export default function Seo({ title, description, path = '/', image }: SeoProps) {
  const url = `${ORIGIN}${path}`;
  const img = image ?? 'https://bolt.new/static/og_default.png';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

export function HotelJsonLd() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'The White House Hotel',
    description:
      'A family-run hotel 800 metres from Kashi Vishwanath Temple in Varanasi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D 39/20-21, Kodai Chowki, Nai Sarak',
      addressLocality: 'Varanasi',
      addressRegion: 'Uttar Pradesh',
      postalCode: '221001',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '677',
    },
    telephone: '+91 7398722222',
    priceRange: '₹2,500 – ₹4,800',
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
