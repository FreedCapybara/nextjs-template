import React from 'react';
import App from 'next/app';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import { getLocale } from '@lib/i18n';
import { theme } from '@lib/styles';
import configureStore from '@redux/store';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
}
`;

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

class $App extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    const props = { pageProps, locale, messages };

    // locale fallbacks
    // for scenarios where server.js isn't running
    // (like in a serverless Zeit/Now deployment)
    if (!props.locale) {
      props.locale = getLocale(req);
    }

    if (!props.messages) {
      const strings = (await import('@lang/strings')).default;
      props.messages = strings[props.locale];
    }

    return props;
  }

  render() {
    const { Component, pageProps, locale, messages, store } = this.props;

    const intl = createIntl(
      {
        locale,
        messages
      },
      cache
    );

    return (
      <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RawIntlProvider value={intl}>
              <Component {...pageProps} />
            </RawIntlProvider>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga($App));

