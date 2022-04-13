import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {

  it('should render', () => {
    const component = render(<Logo />);
    expect(component).toBeDefined();
  });
});

