import React from 'react';

import { NextPage } from 'next';

import Page from 'components/Page';
import Link from 'components/Link';

const NotFoundPage: NextPage = () => {
  return (
    <Page
      emoji="❌"
      title="are you lost?"
      subtitle="err(404)"
    >
      <p>the page you requested could not be found, maybe it&apos;s in progress...</p>
      <Link href="/" className="underlined">go home</Link>
    </Page>
  );
};

export default NotFoundPage;