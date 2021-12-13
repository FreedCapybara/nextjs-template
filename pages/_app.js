import React from 'react';
import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import trackingCode from '@config/analytics-config';
import configureHttp from '@config/http-config';
import configureStore from '@config/redux-config';
import configureRouter, { serverRedirect } from '@config/router-config';
import { theme } from '@config/theme';

import { initTracker, trackPage } from '@lib/analytics';

import { authActions } from '@redux/actions'; // eslint-disable-line no-unused-vars

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: ${theme.colors.textColor};
}

* {
  box-sizing: border-box;
}
`;

const isServer = typeof(window) === 'undefined';

const store = configureStore();

class $App extends App {

  static async getInitialProps({ Component, ctx }) {
    const { req, res } = ctx; // eslint-disable-line no-unused-vars

    if (req) {
      if (serverRedirect(req, res)) {
        return {};
      }
    }

    if (req) {
      // configure the http client (server-only)
      configureHttp(req, res);

      // preload user data -- pretty sure this is only required on the server
      // because:
      //   1. if the user is authenticated, the server sends the user state as initial props
      //   2. if the user is not authenticated, then they have to log in, which populates the user state
      //   3. if the user refreshes the page after logging in, we're back at scenario #1
      store.dispatch(authActions.getUser());
    } else {
      // client-only
      trackPage(ctx.asPath); // also in the constructor -- for some reason GA wasn't picking up tracking requests from the server /shrug
    }

    // Get page props
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const props = { pageProps };

    return props;
  }

  // server: runs after getInitialProps
  // client: runs once at load (getInitialProps does not run at load)
  constructor(props) {
    super(props);

    if (!isServer) {
      initTracker(trackingCode);
      trackPage(props.router.asPath);
    }
  }

  // note componentDidMount is client-only and runs once
  componentDidMount() {
    configureHttp();
    configureRouter();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default createWrapper(() => store).withRedux(withReduxSaga($App));

