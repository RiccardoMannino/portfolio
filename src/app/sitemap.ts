import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.riccardomannino.it'

  const staticRoutes = ['', '/about', '/contact', '/projects', '/resume'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }),
  )

  return [...staticRoutes]
}
