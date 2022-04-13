import { render } from '@testing-library/react';

import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch', () => {

  it('should render', () => {
    const component = render(<ToggleSwitch />);
    expect(component).toBeDefined();
  });
});

