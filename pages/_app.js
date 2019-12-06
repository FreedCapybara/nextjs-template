import React from 'react';
import App from 'next/app';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { getLocale } from '@lib/i18n';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export default class $App extends App {

  static async getInitialProps({ Component, context }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = context;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    const props = { pageProps, locale, messages };
    if (!props.locale) {
      props.locale = getLocale(req);
    }

    if (!props.messages) {
      const strings = await import('@lang/strings');
      props.messages = strings[props.locale];
    }

    return props;
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    const intl = createIntl(
      {
        locale,
        messages
      },
      cache
    );

    return (
      <RawIntlProvider value={intl}>
        <Component {...pageProps} />
      </RawIntlProvider>
    );
  }
}
