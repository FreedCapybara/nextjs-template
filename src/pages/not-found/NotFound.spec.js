import { render } from '@testing-library/react';

import { NotFound } from './index';

describe('NotFound', () => {

  it('should render', () => {
    const component = render(<NotFound />);
    expect(component).toBeDefined();
  });
});

