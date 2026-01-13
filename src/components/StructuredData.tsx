export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Deep Dive Netrani",
    "description": "Professional scuba diving center at Netrani Island, Murudeshwar. PADI certified instructors, equipment rental, underwater photography.",
    "url": "https://deepdivenetrani.in",
    "telephone": "6360788946",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Murudeshwar",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.0942",
      "longitude": "74.4845"
    },
    "openingHours": "Mo-Su 06:00-18:00",
    "priceRange": "₹₹",
    "servesCuisine": "Scuba Diving Services",
    "serviceType": [
      "Scuba Diving",
      "Snorkeling", 
      "Underwater Photography",
      "Equipment Rental",
      "PADI Certification"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Scuba Diving Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Scuba Diving Package",
            "description": "Boat ride, snorkeling, underwater photography, equipment, instructor"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}