import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { PageHeading } from '@components/layout';

describe('PageHeading', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<PageHeading />);
    expect(component).toBeDefined();
  });

  it('should render with breadcrumb', () => {
    const breadcrumb = [
      { path: '/', title: 'home' },
      { title: 'test' }
    ];
    const component = shallowWrapped(<PageHeading breadcrumb={breadcrumb} />);
    expect(component).toBeDefined();
  });
});
