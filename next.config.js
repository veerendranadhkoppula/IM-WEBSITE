// next.config.js
const nextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|riv)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]", // Customizes the output path
      },
    });
    return config;
  },
};

module.exports = nextConfig;
