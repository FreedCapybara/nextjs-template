import { render } from '@testing-library/react';

import { EmptyState } from './EmptyState';

describe('EmptyState', () => {

  it('should render', () => {
    const component = render(<EmptyState />);
    expect(component).toBeDefined();
  });
});

