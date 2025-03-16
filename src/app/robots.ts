import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact', '/projects', '/resume'],
      disallow: ['/api/*'],
    },
    sitemap: 'https://riccardomannino.it/sitemap.xml',
  }
}
