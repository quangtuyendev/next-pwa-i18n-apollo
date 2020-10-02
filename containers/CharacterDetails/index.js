import CharacterDetails from '@/components/CharacterDetails';
import Layout from '@/components/Shared/Layout';
import React from 'react';

function CharacterDetailsContainer({ character }) {
  return (
    <Layout>
      <CharacterDetails {...character} />
    </Layout>
  );
}

export default CharacterDetailsContainer;
