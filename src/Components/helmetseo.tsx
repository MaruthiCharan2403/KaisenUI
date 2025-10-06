import { Helmet } from "react-helmet"

export default function HelmetSEO({
  title = "Kaisen UI - Beautiful React & Tailwind CSS Component Library",
  description = "A collection of high-quality React components built with Tailwind CSS that you can copy and paste into your apps. Perfect for modern web applications.",
  keywords = "react component library, next component library, tailwindcss component library, best ui components, react ui, tailwind components, ui library, react components, web components",
  canonicalUrl = "https://kaisenui.me",
  ogImage = "https://kaisenui.me/Kaisen.png", 
  children,
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Kaisen UI" />

      {/* Structured data for rich results */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Kaisen UI",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "${description}"
          }
        `}
      </script>

      {children}
    </Helmet>
  )
}
