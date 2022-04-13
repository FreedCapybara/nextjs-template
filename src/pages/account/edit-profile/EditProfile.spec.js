import { render } from '@testing-library/react';

import { EditProfile } from './index';

describe('EditProfile', () => {

  it('should render', () => {
    const component = render(<EditProfile />);
    expect(component).toBeDefined();
  });
});

