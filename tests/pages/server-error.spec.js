import React from 'react';

import { shallowWrapped } from '@tests/wrapper';
import { IntlMock, StoreMock } from '@tests/mocks';

import { appActions } from '@redux/actions';

import { ServerError } from '@pages/server-error';

describe('Server error page', () => {
  const intl = new IntlMock();
  const store = new StoreMock();

  it('should render without throwing an error', () => {
    const component = shallowWrapped(<ServerError intl={intl} />);
    expect(component).toBeDefined();
  });

  it('should getInitialProps', () => {
    const spy = spyOn(store, 'dispatch');
    const context = {
      store
    };
    ServerError.getInitialProps(context);
    expect(spy).toHaveBeenCalledWith(appActions.setError(false));
  });
});
