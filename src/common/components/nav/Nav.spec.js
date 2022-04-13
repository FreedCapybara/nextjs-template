import { render } from '@testing-library/react';

import { Nav } from './Nav';

describe('Nav', () => {

  it('should render', () => {
    const component = render(<Nav />);
    expect(component).toBeDefined();
  });
});

