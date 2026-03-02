import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/contact', '/projects/*', '/resume', '/privacy'],
      disallow: ['/api/*'],
    },
    sitemap: 'https://www.riccardomannino.it/sitemap.xml',
  }
}
