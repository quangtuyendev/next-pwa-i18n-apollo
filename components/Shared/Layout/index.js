import React from 'react';
import ActionBar from '../ActionBar';
import Meta from '../Meta';
import PageHeading from '../PageHeading';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <ActionBar />
      <PageHeading />
      {children}
    </>
  );
}

export default Layout;
