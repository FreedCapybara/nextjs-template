import { render } from '@testing-library/react';

import { Toolbar } from './Toolbar';

describe('Toolbar', () => {

  it('should render', () => {
    const component = render(<Toolbar />);
    expect(component).toBeDefined();
  });
});

