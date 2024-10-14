/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Abilita le source maps solo in produzione
      config.devtool = 'source-map'
    }

    return config
  },
}

export default nextConfig
