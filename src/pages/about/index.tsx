import React from 'react';

import { NextPage } from 'next';

import Page from 'components/Page';
import Link from 'components/Link';

const AboutPage: NextPage = () => {
  return (
    <Page
      title="about me"
    >
      <p>
        I design, build and publish projects of quality and reliability. Currently, I&apos;m director and developer at <Link href="https://onruntime.com/" className="underlined">onRuntime</Link>.
      </p>
    </Page>
  );
};

export default AboutPage;