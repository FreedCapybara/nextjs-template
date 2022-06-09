import { render } from '@testing-library/react';

import { ResetPassword } from './ResetPassword';

describe('ResetPassword', () => {

  it('should render', () => {
    const component = render(<ResetPassword />);
    expect(component).toBeDefined();
  });
});

