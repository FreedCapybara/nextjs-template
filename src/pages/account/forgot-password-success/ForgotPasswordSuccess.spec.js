import { render } from '@testing-library/react';

import { ForgotPasswordSuccess } from './index';

describe('ForgotPasswordSuccess', () => {

  it('should render', () => {
    const component = render(<ForgotPasswordSuccess />);
    expect(component).toBeDefined();
  });
});

