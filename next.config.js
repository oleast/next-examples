/* eslint-disable @typescript-eslint/no-var-requires */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  webpack: (config, options) => {
    config.plugins = config.plugins || [];
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin(),
    ];

    return config;
  },
};

module.exports = nextConfig;
