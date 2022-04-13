import { render } from '@testing-library/react';

import { ValidatedInput } from './ValidatedInput';

describe('ValidatedInput', () => {

  it('should render', () => {
    const component = render(<ValidatedInput />);
    expect(component).toBeDefined();
  });
});

