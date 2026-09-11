import { Helmet } from 'react-helmet-async';
import hotelExterior from '../assets/finalBuilding.jpeg';


const ORIGIN = 'https://thewhitehousevaranasi.com';
const SITE_NAME = 'The White House Varanasi'; // confirm this matches your GBP listing name character-for-character
const PHONE = '+91-7398722222';
const PRICE_RANGE = '₹2,500 – ₹4,800';
const DEFAULT_OG_IMAGE = hotelExterior // host this yourself
const EMAIL = 'thewhitehouse1511@gmail.com';

const ADDRESS = {
  streetAddress: 'D 39/20-21, Kodai Chowki, Nai Sarak',
  addressLocality: 'Varanasi',
  addressRegion: 'Uttar Pradesh',
  postalCode: '221001',
  addressCountry: 'IN',
};

const GEO = { latitude: 25.311719338779792, longitude: 83.00543349804956 };
const GBP_MAPS_URL = 'https://maps.app.goo.gl/QnBWns5CjkfTEoF49';

const SOCIAL_LINKS = [
  'https://www.instagram.com/thewhitehousevaranasi/',
  'https://www.facebook.com/profile.php?id=61594262393757',
  // add TripAdvisor / Booking.com / MakeMyTrip listing URLs here if you have them
];

// Per-page <head> tags

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
};

export default function Seo({
  title,
  description,
  path = '/',
  image,
  imageAlt = SITE_NAME,
}: SeoProps) {
  const url = `${ORIGIN}${path}`;
  const img = image ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}

// Structured data — single @graph
// Drop <AllSeoSchemas /> once in your root layout (e.g. App.tsx)

export function AllSeoSchemas() {
  const hotelId = `${ORIGIN}/#hotel`;
  const websiteId = `${ORIGIN}/#website`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: ORIGIN,
        name: SITE_NAME,
        publisher: { '@id': hotelId },
      },
      {
        '@type': 'Hotel',
        '@id': hotelId,
        name: SITE_NAME,
        description:
          'A family-run hotel 400 metres from Kashi Vishwanath Temple in Varanasi, walking distance to Dashashwamedh Ghat and the Ganga Aarti.',
        url: ORIGIN,
        telephone: PHONE,
        email: EMAIL,
        priceRange: PRICE_RANGE,
        image: [
          `${ORIGIN}/images/hotel-exterior.jpg`,
          `${ORIGIN}/images/hotel-room.jpg`,
          `${ORIGIN}/images/hotel-lobby.jpg`,
        ],
        address: {
          '@type': 'PostalAddress',
          ...ADDRESS,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: GBP_MAPS_URL,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '677',
        },
        checkinTime: '14:00',
        checkoutTime: '11:00',
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Rooftop Restaurant', value: true },
          { '@type': 'LocationFeatureSpecification', name: '24-Hour Front Desk', value: true },
        ],
        containsPlace: [
          {
            '@type': 'TouristAttraction',
            name: 'Kashi Vishwanath Temple',
            description: 'Approx. 400 m from the hotel, a 5-minute walk.',
          },
          {
            '@type': 'TouristAttraction',
            name: 'Dashashwamedh Ghat',
            description: 'Approx. 600 m from the hotel, walking distance for the Ganga Aarti.',
          },
          {
            '@type': 'TouristAttraction',
            name: 'Vishwanath Corridor',
            description: 'Approx. 500 m from the hotel, connecting the temple and the ghats.',
          },
          {
            '@type': 'TouristAttraction',
            name: 'Sarnath',
            description: 'Approx. 9.5 km from the hotel, about a 25–30 minute drive.',
          },
        ],
        sameAs: [GBP_MAPS_URL, ...SOCIAL_LINKS],
      },
      {
        '@type': 'FAQPage',
        '@id': `${ORIGIN}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How far is The White House Varanasi from Kashi Vishwanath Temple?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The White House Varanasi is approximately 400 metres from Kashi Vishwanath Temple, an easy 5-minute walk through the old city.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is The White House Varanasi close to Dashashwamedh Ghat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Dashashwamedh Ghat is about 600 metres from the hotel, within easy walking distance for the evening Ganga Aarti.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the hotel near the Ganga Aarti at Dashashwamedh Ghat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, the Ganga Aarti takes place about 800 metres from the hotel, roughly a 10-minute walk.',
            },
          },
          {
            '@type': 'Question',
            name: 'How far is Sarnath from The White House Varanasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sarnath is around 9.5 km from the hotel, roughly a 25–30 minute drive.',
            },
          },
        ],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}