/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 *
 * See https://github.com/formatjs/react-intl/blob/master/docs/Testing-with-React-Intl.md#enzyme
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { theme } from '@config/theme';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = require('@lang/en'); // en.json
const defaultLocale = 'en';
const locale = defaultLocale;

const Wrapper = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages} >
        {props.children}
      </IntlProvider>
    </ThemeProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object
};

export function mountWrapped(node) {
  return mount(node, {
    wrappingComponent: Wrapper,
    wrappingComponentProps: {}
  });
}

export function shallowWrapped(node) {
  return shallow(node, {
    wrappingComponent: Wrapper,
    wrappingComponentProps: {}
  });
}
