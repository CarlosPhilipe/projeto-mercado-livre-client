import React from 'react';
import { shape, func } from 'prop-types';
import GlobalStyle from '../styles/global.style';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mercado livre</title>
        <meta name="description" content="Teste prático de frontend" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  pageProps: shape().isRequired,
  Component: func.isRequired,
};

export default App
