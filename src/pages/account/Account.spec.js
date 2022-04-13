import { render } from '@testing-library/react';

import { Account } from './index';

describe('Account', () => {

  it('should render', () => {
    const component = render(<Account />);
    expect(component).toBeDefined();
  });
});

