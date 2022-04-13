import { render } from '@testing-library/react';

import { NavMenu } from './NavMenu';

describe('NavMenu', () => {

  it('should render', () => {
    const component = render(<NavMenu />);
    expect(component).toBeDefined();
  });
});

