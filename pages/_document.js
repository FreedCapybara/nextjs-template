import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class $Document extends Document {

  static async getInitialProps(ctx) {
    const pageProps = await super.getInitialProps(ctx);

    //const { req } = ctx; // commented-out because it causes a linter error, but this line is useful for reference on accessing request context

    const props = {
      ...pageProps
    };

    // styled-components SSR
    // See https://github.com/zeit/next.js/tree/master/examples/with-styled-components
    const styleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styleSheet.collectStyles(<App {...props} />)
        });

      props.styles = (
        <>
          { pageProps.styles }
          { styleSheet.getStyleElement() }
        </>
      );
    } finally {
      styleSheet.seal();
    }

    return props;
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* probably want to figure out how to load this asynchronously
            https://stackoverflow.com/questions/32759272/how-to-load-css-asynchronously
            or get a css loader to work with Next.js */}
          <link rel="stylesheet" href="/themify-icons/themify-icons.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
