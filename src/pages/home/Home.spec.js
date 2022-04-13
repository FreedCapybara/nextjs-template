import { render } from '@testing-library/react';

import { Home } from './index';

describe('Home', () => {

  it('should render', () => {
    const component = render(<Home />);
    expect(component).toBeDefined();
  });
});

