import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'app/config/theme/emotion-cache';

import App from 'app/com';

const clientSideEmotionCache = createEmotionCache();

import 'core/ui/theme/theme.css';
import 'core/ui/theme/components.css';

// State
import { Provider as StateProvider } from 'react-redux'
import { store } from 'app/state/store'
import { useRouter } from 'next/router';

export default function BaseApp(props) {  
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(
        `App is changing to ${url}`
      )
      console.log({ clicked: false, menuName: "Menu" })
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  return (
    <StateProvider store={store}>
      <CacheProvider value={emotionCache}>
        <App>       
          <Component 
            {...pageProps}
          />
        </App>
      </CacheProvider>
    </StateProvider>
  );
}

BaseApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};