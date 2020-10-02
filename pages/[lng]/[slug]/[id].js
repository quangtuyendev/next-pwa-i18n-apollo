import CharacterDetailsContainer from '@/containers/CharacterDetails';
import { CHARACTERS_LIST, CHARACTER_DETAILS } from '@/graphql/queries';
import useI18n from '@/hooks/use-i18n';
import { initializeApollo } from '@/lib/ApolloClient';
import { contentLanguageMap } from '@/lib/i18n';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function CharacterDetailsPage() {
  const {
    query: { id },
  } = useRouter();
  const { data } = useQuery(CHARACTER_DETAILS, {
    variables: {
      id,
    },
  });

  const i18n = useI18n();
  const { character } = data || { character: {} };
  return (
    <>
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[i18n.activeLocale]}
        />
        <title>{character.name} | Site</title>
      </Head>
      <CharacterDetailsContainer character={character} />
    </>
  );
}

export default CharacterDetailsPage;

export async function getStaticProps({ params: { id, lng } }) {
  const { default: lngDict = {} } = await import(
    `../../../locales/${lng}.json`
  );

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: CHARACTER_DETAILS,
    variables: {
      id,
    },
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
  const apolloClient = initializeApollo();
  const res = await apolloClient.query({
    query: CHARACTERS_LIST,
  });
  return {
    paths: res.data.characters.results.map(({ name, id }) => ({
      params: {
        slug: name.toLowerCase().split(' ').join('-'),
        id,
        lng: 'en',
      },
    })),
    fallback: true,
  };
}
