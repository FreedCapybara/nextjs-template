import React from 'react';
import md5 from 'js-md5';

import { shallowWrapped } from '@tests/wrapper';

import { Avatar } from '@components/elements';

describe('Avatar', () => {

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<Avatar email="test@test.net" />);
    expect(component).toBeDefined();
  });

  it('should get Gravatar URLs', () => {
    const props = {
      email: 'test@test.net'
    };
    const component = new Avatar(props);
    const result = component.gravatarUrl;
    expect(result).toContain(md5('test@test.net'));
  });

  it('should get default Gravatar URLs', () => {
    const props = {
      email: null
    };
    const component = new Avatar(props);
    const result = component.gravatarUrl;
    expect(result).toContain('00000000000000000000000000000000');
  });
});
