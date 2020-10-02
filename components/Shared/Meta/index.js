import Head from 'next/head';
import React from 'react';

function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
      <link rel="apple-touch-icon" href="/static/icons/icon-64.png" />
      <meta property="og:url" content="https://next-pwa-i18n-apollo.now.sh" />
      <meta name="keywords" content="NextJs I18n PWA Apollo" />
      <meta name="description" content="NextJs I18n PWA Apollo" />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <title>NextJs I18n PWA Apollo</title>
      <meta property="og:title" content="NextJs I18n PWA Apollo" />
      <meta
        property="og:description"
        content="Welcome, Simple starter using NextJs + I18n + Apollo"
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1503252947848-7338d3f92f31"
      />
      <meta name="theme-color" content="#f00" />
      <meta name="next-head-count" content={10} />
    </Head>
  );
}

export default Meta;
