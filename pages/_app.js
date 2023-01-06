import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utils/createEmotionCache.js';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import Layout from '../src/components/Layout'

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
  );
};

export default MyApp;

