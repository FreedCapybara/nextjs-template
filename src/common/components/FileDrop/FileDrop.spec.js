import { render } from '@testing-library/react';

import { FileDrop } from './FileDrop';

describe('FileDrop', () => {

  it('should render', () => {
    const component = render(<FileDrop />);
    expect(component).toBeDefined();
  });
});

