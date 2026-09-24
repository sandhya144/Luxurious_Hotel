
import { Helmet } from "react-helmet-async";


// HOTEL / WEBSITE CONSTANTS

export const ORIGIN = "https://thewhitehousevaranasi.com";

export const SITE_NAME = "The White House Varanasi - Hotel Near Kashi Vishwanath Temple";

export const PHONE = "+91 73987 22222";

export const PRICE_RANGE = "₹2,500 – ₹4,800";

export const EMAIL = "thewhitehouse1511@gmail.com";

// IMPORTANT: This image must actually exist at: public/images/og-default.jpg

export const DEFAULT_OG_IMAGE =
  `${ORIGIN}/images/og-default.jpeg`;

export const ADDRESS = {
  streetAddress: "D 39/20-21, Kodai Chowki, Nai Sarak",
  addressLocality: "Varanasi",
  addressRegion: "Uttar Pradesh",
  postalCode: "221001",
  addressCountry: "IN",
} as const;

export const GEO = {
  latitude: 25.311719338779792,
  longitude: 83.00543349804956,
} as const;

export const GBP_MAPS_URL =
  "https://maps.app.goo.gl/QnBWns5CjkfTEoF49";

export const SOCIAL_LINKS = [
  "https://www.instagram.com/thewhitehousevaranasi/",
  "https://www.facebook.com/profile.php?id=61594262393757",
];


// SEO PROPS


type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
};


// SEO COMPONENT


export default function Seo({
  title,
  description,
  path = "/",
  image,
  imageAlt = SITE_NAME,
}: SeoProps) {

  const url = `${ORIGIN}${path}`;

  const img = image ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>

      {/* Basic SEO */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={url}
      />


      {/* Open Graph */}

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={img}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content={imageAlt}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />


      {/* Twitter / X */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={img}
      />

      <meta
        name="twitter:image:alt"
        content={imageAlt}
      />

    </Helmet>
  );
}