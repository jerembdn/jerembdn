import React, { FC } from "react";
import { AppProps } from "next/app";

import Layout from "../components/Layout";

import GlobalStyle from "@/components/GlobalStyle";
import Head from "@/components/Head";
import { GlobalThemeProvider } from "@/contexts/GlobalTheme";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalThemeProvider>
      <Layout>
        <Head />
        <GlobalStyle />

        <Component {...pageProps} />
      </Layout>
    </GlobalThemeProvider>
  );
};

export default App;
