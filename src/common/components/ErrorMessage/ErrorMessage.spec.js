import { render } from '@testing-library/react';

import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {

  it('should render', () => {
    const component = render(<ErrorMessage />);
    expect(component).toBeDefined();
  });
});

