import { Helmet } from "react-helmet-async"

interface SeoProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
}

export function Seo({
  title = "Alexia Sahara - EdTech Specialist & Business Development Leader",
  description = "Experienced EdTech professional with 6+ years delivering digital learning solutions across East Africa. Specializing in business development, project management, and educational technology implementation.",
  keywords = "EdTech, Education Technology, Business Development, East Africa, Digital Learning, Project Management, Alexia Sahara",
  author = "Alexia Sahara"
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

