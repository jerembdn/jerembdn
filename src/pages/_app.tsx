import '../styles/globals.css';

import React, { FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default _App;
