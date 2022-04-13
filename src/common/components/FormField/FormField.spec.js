import { render } from '@testing-library/react';

import { FormField } from './FormField';

describe('FormField', () => {

  it('should render', () => {
    const component = render(<FormField />);
    expect(component).toBeDefined();
  });
});

