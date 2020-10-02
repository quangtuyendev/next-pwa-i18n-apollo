import CharacterItem from '@/components/Home/CharacterItem';
import CharacterList from '@/components/Home/CharacterList';
import Layout from '@/components/Shared/Layout';
import React from 'react';

function HomeContainer({ characters }) {
  function renderCharacters() {
    return characters.map((item) => <CharacterItem key={item.id} {...item} />);
  }
  return (
    <Layout>
      <div className="container">
        <CharacterList>{renderCharacters()}</CharacterList>
      </div>
    </Layout>
  );
}

export default HomeContainer;
