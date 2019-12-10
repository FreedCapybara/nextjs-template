import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import cookie from 'cookie';

import { getLocale } from '@lib/i18n';
import { theme } from '@lib/styles';
import configureStore from '@redux/store';
import { Http } from '@lib/http';

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000';

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

    // This is for setting up the HTTP client in componentDidMount.
    // Can't set it up here because getInitialProps() only runs once,
    // but the user might want to do something like click a button to load something,
    // without having to trigger $App.getInitialProps() by navigating.
    // (/shrug)
    this.req = req;

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

  componentDidMount() {
    // configure the http client
    Http.configure((client) => {
      client.setBaseUrl(apiBaseUrl);

      client.addInterceptor(404, () => {
        Router.push('/not-found');
      });

      client.addInterceptor(401, () => {
        Router.push('/login');
      });

      client.addInterceptor(500, () => {
        Router.push('/error');
      });

      // set auth header from the token cookie
      const cookieSource = this.req ? (this.req.headers.cookie || '') : document.cookie;
      const cookies = cookie.parse(cookieSource);
      const token = cookies.token;

      if (token) {
        client.addHeader('Authorization', `Bearer ${token}`);
      }
    });
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

