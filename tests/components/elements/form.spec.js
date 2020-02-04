import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { Form } from '@components/elements';

describe('Form', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Form />);
    expect(component).toBeDefined();
  });
});
