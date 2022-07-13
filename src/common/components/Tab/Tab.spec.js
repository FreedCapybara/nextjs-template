import { render } from '@testing-library/react';

import { Tab } from './Tab';

describe('Tab', () => {

  it('should render', () => {
    const component = render(<Tab />);
    expect(component).toBeDefined();
  });
});

