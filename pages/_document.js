import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { getServerLocale } from '@lib/i18n';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class $Document extends Document {

  static async getInitialProps(ctx) {
    const pageProps = await super.getInitialProps(ctx);

    const { req } = ctx;

    const props = {
      ...pageProps,
      locale: req.locale,
      localeDataScript: req.localeDataScript
    };

    // locale fallback
    // Gets the locale from the Accept-Language header in scenarios where server.js isn't running
    // (like in a serverless Zeit/Now deployment)
    if (!props.locale) {
      props.locale = getServerLocale(req);
    }

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
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v3/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;
    const fallbackLocaleDataScript = `https://cdn.jsdelivr.net/npm/@formatjs/intl-relativetimeformat/dist/locale-data/${this.props.locale}.js`;

    return (
      <html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <script src={polyfill} />
          {this.props.localeDataScript ?
            <script
              dangerouslySetInnerHTML={{
                __html: this.props.localeDataScript
              }}
            />
              :
            <script src={fallbackLocaleDataScript} />}
          <NextScript />
        </body>
      </html>
    );
  }
}
