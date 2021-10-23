import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ApolloProvider } from "@apollo/client";
import theme from 'app/config/theme/main';
import createEmotionCache from 'app/config/theme/emotion-cache';
import client from "app/config/providers/apollo";
import links from 'app/data/links';
import socialNetworksLinks from 'app/data/social-networks'
import App from 'app/com';

import { Provider as StateProvider } from 'react-redux'
import { store } from 'app/state/store'

import Constants from 'app/config/constants'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import 'core/app/dashboard/app.css';
import 'core/ui/theme/theme.css';
import 'shared/globals/social_networks/social_networks.css';

import { useRouter } from 'next/router';

import ReactGA from 'react-ga';

export default function BaseApp(props) {
  const router = useRouter(); 
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect( ()=>{
    ReactGA.initialize(Constants.PLUGINS.GOOGLE.ANALYTICS);
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, [])

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
                      title: Constants.APP.TITLE,
                      pageTitle: Constants.APP.PAGE_TITLE,
                    },
                    footer: {
                      version: Constants.APP.VERSION,
                      links: links,
                      socialNetworks: socialNetworksLinks,
                    },
                  }}                             
                >       
                  { router.isReady && 
                    <Component 
                      {...pageProps}
                    />
                  }
                </App>
            </ThemeProvider>
          </StateProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

BaseApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};