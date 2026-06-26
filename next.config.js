// next.config.js
const path = require('path')

const nextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|riv)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    })
    // Explicit alias so webpack can always find the Payload config
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['@payload-config'] = path.resolve(__dirname, 'payload.config.ts')
    return config
  },
}

module.exports = async () => {
  const { withPayload } = await import('@payloadcms/next/withPayload')
  return withPayload(nextConfig)
}
