import React, { useEffect} from 'react';
// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
// MUI Core
import { ServerStyleSheets } from '@mui/styles';
import config from 'app/config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href={`${config.APP.BASE_PATH}/manifest.json`} />
          <link rel="apple-touch-icon" href="/ico/icon.png"></link>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link rel="stylesheet" type="text/css" href={`${config.APP.BASE_PATH}/css/font-awesome.min.css`} /> 
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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

// Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

