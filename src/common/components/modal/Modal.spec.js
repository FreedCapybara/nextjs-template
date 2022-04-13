import { render } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {

  it('should render', () => {
    const component = render(<Modal />);
    expect(component).toBeDefined();
  });
});

