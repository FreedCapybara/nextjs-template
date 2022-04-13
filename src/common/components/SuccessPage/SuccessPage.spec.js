import { render } from '@testing-library/react';

import { SuccessPage } from './SuccessPage';

describe('SuccessPage', () => {

  it('should render', () => {
    const component = render(<SuccessPage />);
    expect(component).toBeDefined();
  });
});

