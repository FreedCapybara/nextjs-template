import { render } from '@testing-library/react';

import { Emoji } from './Emoji';

describe('Emoji', () => {

  it('should render', () => {
    const component = render(<Emoji />);
    expect(component).toBeDefined();
  });
});

