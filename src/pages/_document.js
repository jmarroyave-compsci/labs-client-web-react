import React, { useEffect} from 'react';
// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
// MUI Core
import { ServerStyleSheets } from '@mui/styles';
import config from 'app/config'

import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'app/config/theme/emotion-cache';

export default class MyDocument extends Document {
  render() {
    const { emotionStyleTags } = this.props;
    return (
      <Html lang="en">
        <Head>
          <base href={(config.APP.BASE_PATH.endsWith("/")) ? config.APP.BASE_PATH : `${config.APP.BASE_PATH}/`} />

          {emotionStyleTags}

          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="ico/icon.png"></link>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" /> 

          <meta name="description" content={config.APP.DESCRIPTION} />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={config.APP.HOME_URL} />
          <meta name="twitter:title" content={config.SOCIAL_NETWORKS.CARD.TITLE} />
          <meta name="twitter:description" content={config.APP.DESCRIPTION} />
          <meta name="twitter:image" content={config.SOCIAL_NETWORKS.CARD.THUMBNAIL_TWITTER} />
          <meta name="twitter:creator" content={config.SOCIAL_NETWORKS.TWITTER} key="twhandle" />

          {/* Open Graph */}
          <meta property="og:url" content={config.APP.HOME_URL} key="ogurl" />
          <meta property="og:image" content={config.SOCIAL_NETWORKS.CARD.THUMBNAIL_TWITTER} key="ogimage" />
          <meta property="og:site_name" content={config.APP.TITLE} key="ogsitename" />
          <meta property="og:title" content={config.SOCIAL_NETWORKS.CARD.TITLE} key="ogtitle" />
          <meta property="og:description" content={config.APP.DESCRIPTION} key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });


  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

