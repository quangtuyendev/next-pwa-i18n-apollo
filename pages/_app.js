import { useApollo } from '@/lib/ApolloClient';
import '@/styles/index.css';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import I18n from '../lib/i18n';

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
        <Component {...pageProps} />
      </I18n>
    </ApolloProvider>
  );
}
