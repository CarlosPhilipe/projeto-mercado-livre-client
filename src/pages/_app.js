import React from 'react';
import { shape, func } from 'prop-types';
import GlobalStyle from '../styles/global.style';

function App({ Component, pageProps }) {
  return (
    <>
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
