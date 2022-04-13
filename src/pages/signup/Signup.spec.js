import { render } from '@testing-library/react';

import { Signup } from './index';

describe('Signup', () => {

  it('should render', () => {
    const component = render(<Signup />);
    expect(component).toBeDefined();
  });
});

