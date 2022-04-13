import { render } from '@testing-library/react';

import { FilePicker } from './FilePicker';

describe('FilePicker', () => {

  it('should render', () => {
    const component = render(<FilePicker />);
    expect(component).toBeDefined();
  });
});

