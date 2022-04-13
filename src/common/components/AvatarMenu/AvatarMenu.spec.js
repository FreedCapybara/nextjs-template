import { render } from '@testing-library/react';

import { AvatarMenu } from './AvatarMenu';

describe('AvatarMenu', () => {

  it('should render', () => {
    const component = render(<AvatarMenu />);
    expect(component).toBeDefined();
  });
});

