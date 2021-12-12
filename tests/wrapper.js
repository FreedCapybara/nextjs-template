import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { theme } from '@config/theme';

const Wrapper = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
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
