export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CodeGuide.dev - Modern Web Development Starter Kit",
    "description": "Start building faster with CodeGuide - a production-ready starter kit featuring authentication, database integration, payments, and more. Built with Next.js 14, Clerk, Supabase, and Stripe.",
    "url": "https://codeguide.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "CodeGuide.dev",
      "url": "https://codeguide.dev"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "keywords": "Next.js, React, Starter Kit, Web Development, Authentication, Database, Payments, Supabase, Clerk, Stripe",
    "programmingLanguage": "TypeScript, JavaScript",
    "license": "https://opensource.org/licenses/MIT"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}