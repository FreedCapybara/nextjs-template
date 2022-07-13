import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {

  it('should render', () => {
    const component = render(<Avatar />);
    expect(component).toBeDefined();
  });
});

