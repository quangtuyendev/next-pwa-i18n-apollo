import React from 'react';
import useI18n from '@/hooks/use-i18n';

function PageHeading() {
  const i18n = useI18n();
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">{i18n.t('welcomeMsg')}</h2>
      </div>
    </div>
  );
}

export default PageHeading;
