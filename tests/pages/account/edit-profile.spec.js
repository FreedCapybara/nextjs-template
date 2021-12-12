import React from 'react';

import { shallowWrapped } from '@tests/wrapper';

import { gravatarUrl } from '@lib/gravatar';

import { EditProfile } from '@pages/account/edit-profile';

describe('EditProfile page', () => {

  it('should render without throwing an error', () => {
    const user = {};
    const component = shallowWrapped(<EditProfile user={user} />);
    expect(component).toBeDefined();
  });

  it('should get gravatarUrl', () => {
    const props = {
      user: {
        email: 'test@test.net'
      }
    };
    const component = new EditProfile(props);
    const result = component.gravatarUrl;
    expect(result).toBe(gravatarUrl('test@test.net', 250));
  });

  it('should handleInputChange', () => {
    const props = {
      user: {}
    };
    const e = {
      target: {
        name: 'test',
        value: 'testValue'
      }
    };
    const component = new EditProfile(props);
    const spy = jest.spyOn(component, 'setState');

    component.handleInputChange(e);

    expect(spy).toHaveBeenCalledWith({ 'test': 'testValue' });
  });

  it('should submit', () => {
    const updateProfile = jest.fn();
    const props = {
      user: {},
      updateProfile
    };

    const preventDefault = jest.fn();
    const e = {
      preventDefault
    };

    const component = new EditProfile(props);
    component.state = {
      firstName: 'test'
    };

    component.submit(e);

    expect(preventDefault).toHaveBeenCalled();
    expect(updateProfile).toHaveBeenCalledWith({ firstName: 'test' });
  });
});
