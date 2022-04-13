import { render } from '@testing-library/react';

import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {

  it('should render', () => {
    const component = render(<LoadingSpinner />);
    expect(component).toBeDefined();
  });
});

