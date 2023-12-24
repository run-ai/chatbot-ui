const { i18n } = require('./next-i18next.config');

let pathPrefix = process.env.PATH_PREFIX || '';
if (pathPrefix && !pathPrefix.startsWith('/')) {
  pathPrefix = '/' + pathPrefix;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PATH_PREFIX: pathPrefix,
  },
  basePath: pathPrefix,
  assetPrefix: pathPrefix,
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;
