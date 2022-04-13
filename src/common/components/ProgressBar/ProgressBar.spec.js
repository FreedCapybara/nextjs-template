import { render } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {

  it('should render', () => {
    const component = render(<ProgressBar />);
    expect(component).toBeDefined();
  });
});

