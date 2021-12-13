import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { StoreMock } from '@tests/mocks';

import { appActions } from '@redux/actions';

import { ServerError } from '@pages/server-error';

describe('Server error page', () => {
  const store = new StoreMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ServerError />);
    expect(component).toBeDefined();
  });

  it('should getInitialProps', async () => {
    const spy = jest.spyOn(store, 'dispatch').mockImplementation(() => {});
    const context = {
      store
    };
    await ServerError.getInitialProps(context);
    expect(spy).toHaveBeenCalledWith(appActions.setError(false));
  });
});
