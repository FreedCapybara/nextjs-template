import { render } from '@testing-library/react';

import { ResetPasswordSuccess } from './index';

describe('ResetPasswordSuccess', () => {

  it('should render', () => {
    const component = render(<ResetPasswordSuccess />);
    expect(component).toBeDefined();
  });
});

