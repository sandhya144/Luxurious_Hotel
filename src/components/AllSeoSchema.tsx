import { Helmet } from "react-helmet-async";

import {
  ORIGIN,
  SITE_NAME,
  PHONE,
  EMAIL,
  PRICE_RANGE,
  ADDRESS,
  GEO,
  GBP_MAPS_URL,
  SOCIAL_LINKS,
} from "./Seo";


export function AllSeoSchemas() {

  const hotelId = `${ORIGIN}/#hotel`;

  const websiteId = `${ORIGIN}/#website`;

  const hotelImages = [
    `${ORIGIN}/images/hotel-exterior.jpeg`,
    `${ORIGIN}/images/hotel-room.jpeg`,
    `${ORIGIN}/images/hotel-lobby.jpeg`,
  ];


  const graph = {

    "@context": "https://schema.org",

    "@graph": [
  
      // WEBSITE

      {
        "@type": "WebSite",

        "@id": websiteId,

        url: ORIGIN,

        name: SITE_NAME,

        publisher: {
          "@id": hotelId,
        },
      },

      // HOTEL

      {
        "@type": "Hotel",

        "@id": hotelId,

        name: SITE_NAME,

        description:
          "A family-run hotel near Kashi Vishwanath Temple in Varanasi, with convenient access to Dashashwamedh Ghat and other major attractions.",

        url: ORIGIN,

        telephone: PHONE,

        email: EMAIL,

        priceRange: PRICE_RANGE,

        image: hotelImages,


        // ADDRESS

        address: {

          "@type": "PostalAddress",

          streetAddress: ADDRESS.streetAddress,

          addressLocality: ADDRESS.addressLocality,

          addressRegion: ADDRESS.addressRegion,

          postalCode: ADDRESS.postalCode,

          addressCountry: ADDRESS.addressCountry,

        },


        // LOCATION

        geo: {

          "@type": "GeoCoordinates",

          latitude: GEO.latitude,

          longitude: GEO.longitude,

        },


        hasMap: GBP_MAPS_URL,


        // IMPORTANT:
        // Replace this with the REAL hotel star category.
        starRating: {

          "@type": "Rating",

          ratingValue: "4.5",

        },


        // IMPORTANT:  Only use real/current review data.

        aggregateRating: {

          "@type": "AggregateRating",

          ratingValue: "4.9",

          reviewCount: "677",

        },


        checkinTime: "14:00",

        checkoutTime: "11:00",

        numberOfRooms: 12,


        // AMENITIES

        amenityFeature: [

          {
            "@type": "LocationFeatureSpecification",

            name: "Free Wi-Fi",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Air Conditioning",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Room Service",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Hot Water",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Daily Housekeeping",

            value: true,
          },

        ],


        // SOCIAL / BUSINESS PROFILES

        sameAs: [

          GBP_MAPS_URL,

          ...SOCIAL_LINKS,

        ],

      },

    ],

  };


  return (

    <Helmet>

      <script type="application/ld+json">

        {JSON.stringify(graph)}

      </script>

    </Helmet>

  );
}