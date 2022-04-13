import { render } from '@testing-library/react';

import { Sandbox } from './index';

describe('Sandbox', () => {

  it('should render', () => {
    const component = render(<Sandbox />);
    expect(component).toBeDefined();
  });
});

