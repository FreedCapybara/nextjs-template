import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {

  it('should render', () => {
    const component = render(<Footer />);
    expect(component).toBeDefined();
  });
});

