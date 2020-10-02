import HomeContainer from '@/containers/Home';
import useI18n from '@/hooks/use-i18n';
import { initializeApollo } from '@/lib/ApolloClient';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { CHARACTERS_LIST } from '../../graphql/queries';
import { contentLanguageMap, languages } from '../../lib/i18n';

const HomePage = () => {
  const { data } = useQuery(CHARACTERS_LIST);
  const {
    characters: { results },
  } = data || {};
  const i18n = useI18n();

  return (
    <>
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[i18n.activeLocale]}
        />
        <title>Home Page</title>
      </Head>
      <HomeContainer characters={results} />
    </>
  );
};

export async function getStaticProps({ params: { lng } }) {
  const { default: lngDict = {} } = await import(`../../locales/${lng}.json`);

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: CHARACTERS_LIST,
  });

  return {
    props: {
      lng,
      lngDict,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: languages.map((l) => ({ params: { lng: l } })),
    fallback: false,
  };
}

export default HomePage;
