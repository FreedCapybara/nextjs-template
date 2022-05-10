import { render } from '@testing-library/react';

import { ToolbarGroup } from './ToolbarGroup';

describe('ToolbarGroup', () => {

  it('should render', () => {
    const component = render(<ToolbarGroup />);
    expect(component).toBeDefined();
  });
});

