import { render } from '@testing-library/react';

import { MainNav } from './MainNav';

describe('MainNav', () => {

  it('should render', () => {
    const component = render(<MainNav />);
    expect(component).toBeDefined();
  });
});

