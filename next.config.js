const withOffline = require('next-offline');
const withManifest = require('next-manifest');

module.exports = withManifest(
  withOffline({
    experimental: {
      publicDirectory: true,
    },
    workboxOpts: {
      swDest: '../public/service-worker.js',
      navigateFallback: '/',
      navigateFallbackBlacklist: [/^\/static/, /^\/_next/],
      globPatterns: ['static/**/*'],
      globDirectory: '.',
      skipWaiting: true,
      clientsClaim: true,
      importScripts: ['/warmup-cache.js'],
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://next-pwa-i18n-apollo.now.sh/.*'),
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 10,
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    transformManifest: (originalManifest) => {
      return originalManifest.concat([
        {
          url: '/',
          revision: Date.now().toString(),
        },
      ]);
    },
    manifest: {
      name: 'next-pwa-i18n-apollo',
      short_name: 'next-pwa-i18n-apollo',
      theme_color: '#fff',
      background_color: '#fff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/static/icons/icon-192.png',
          type: 'image/png',
          sizes: '192x192',
          purpose: 'any maskable',
        },
        {
          src: '/static/icons/icon-512.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any maskable',
        },
      ],
    },
    redirects() {
      return [
        {
          source: '/',
          destination: '/en',
          permanent: true,
        },
      ];
    },
  }),
);
