import useI18n from '@/hooks/use-i18n';
import React from 'react';
import Link from 'next/link';

function CharacterItem({ gender, name, id }) {
  const i18n = useI18n();

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{gender}</div>
      <div className="card-body text-primary">
        <Link
          href="/[lng]/[slug]/[id].js"
          as={`/${i18n.activeLocale}/${name
            .toLowerCase()
            .split(' ')
            .join('-')}/${id}`}
        >
          <a className="card-title">{name}</a>
        </Link>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default CharacterItem;
