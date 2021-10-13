import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ApolloProvider } from "@apollo/client";
import theme from 'config/theme/main';
import createEmotionCache from 'config/theme/emotion-cache';
import client from "config/apollo/client";
import links from 'config/footer-links';
import socialNetworksLinks from 'config/social-networks'
import App from 'app';

import { Provider as StateProvider } from 'react-redux'
import { store } from 'app/state/store'

import Constants from 'config/constants'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import 'core/app/dashboard/app.css';
import 'core/ui/theme/theme.css';
import 'shared/globals/social_networks/social_networks.css';

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{Constants.PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
          <StateProvider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
                <App
                  params={{
                    page: {
                      title: Constants.TITLE,
                      pageTitle: Constants.PAGE_TITLE,
                    },
                    footer: {
                      version: Constants.VERSION,
                      links: links,
                      socialNetworks: socialNetworksLinks,
                    },
                  }}                             
                >                
                  <Component 
                    {...pageProps}
                  />
                </App>
            </ThemeProvider>
          </StateProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};