import { render } from '@testing-library/react';

import { Swatch } from './Swatch';

describe('Swatch', () => {

  it('should render', () => {
    const component = render(<Swatch />);
    expect(component).toBeDefined();
  });
});

