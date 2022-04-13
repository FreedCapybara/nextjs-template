import { render } from '@testing-library/react';

import { CenteredLayout } from './CenteredLayout';

describe('CenteredLayout', () => {

  it('should render', () => {
    const component = render(<CenteredLayout />);
    expect(component).toBeDefined();
  });
});

