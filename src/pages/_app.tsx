import '../styles/globals.css';

import React, { FC } from 'react';

import { AppProps } from 'next/app';

import Layout from 'components/Layout';

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default _App;
