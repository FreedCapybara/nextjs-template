import { render } from '@testing-library/react';

import { MainLayout } from './MainLayout';

describe('MainLayout', () => {

  it('should render', () => {
    const component = render(<MainLayout />);
    expect(component).toBeDefined();
  });
});

