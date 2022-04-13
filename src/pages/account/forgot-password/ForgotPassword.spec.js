import { render } from '@testing-library/react';

import { ForgotPassword } from './index';

describe('ForgotPassword', () => {

  it('should render', () => {
    const component = render(<ForgotPassword />);
    expect(component).toBeDefined();
  });
});

