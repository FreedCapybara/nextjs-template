import { render } from '@testing-library/react';

import { DeleteButton } from './DeleteButton';

describe('DeleteButton', () => {

  it('should render', () => {
    const component = render(<DeleteButton />);
    expect(component).toBeDefined();
  });
});

