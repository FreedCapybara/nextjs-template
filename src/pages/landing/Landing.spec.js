import { render } from '@testing-library/react';

import { Landing } from './index';

describe('Landing', () => {

  it('should render', () => {
    const component = render(<Landing />);
    expect(component).toBeDefined();
  });
});

