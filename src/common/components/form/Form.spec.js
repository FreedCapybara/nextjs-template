import { render } from '@testing-library/react';

import { Form } from './Form';

describe('Form', () => {

  it('should render', () => {
    const component = render(<Form />);
    expect(component).toBeDefined();
  });
});

