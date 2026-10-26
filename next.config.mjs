/** @type {import('next').NextConfig} */
const nextConfig = {
  //productionBrowserSourceMaps: true,
  experimental: {
    useTypeScriptCli: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com', // Consente tutte le immagini del profilo di Google
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
