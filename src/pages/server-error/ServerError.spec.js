import { render } from '@testing-library/react';

import { ServerError } from './index';

describe('ServerError', () => {

  it('should render', () => {
    const component = render(<ServerError />);
    expect(component).toBeDefined();
  });
});

