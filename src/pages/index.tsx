import React from 'react';

import Page from 'components/Page';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Page
      emoji="🤔"
      title="who i am?"
    >
      <p>20 y/o web full-stack developer.</p>
    </Page>
  );
};

export default HomePage;