import React from 'react';

import { NextPage } from 'next';

import Page from 'components/Page';

const WorkPage: NextPage = () => {
  return (
    <Page
      emoji="💻"
      title="what i work on?"
      subtitle="me.work();"
    >
    </Page>
  );
};

export default WorkPage;