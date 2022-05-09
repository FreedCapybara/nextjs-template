import { render } from '@testing-library/react';

import { TabBar } from './TabBar';

describe('TabBar', () => {

  it('should render', () => {
    const component = render(<TabBar />);
    expect(component).toBeDefined();
  });
});

