import { render } from '@testing-library/react';

import { Login } from './index';

describe('Login', () => {

  it('should render', () => {
    const component = render(<Login />);
    expect(component).toBeDefined();
  });
});

