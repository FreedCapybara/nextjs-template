import React from 'react';

import { shallowWrapped } from '@test/wrapper';

import { Home } from '@pages/index';
import { exampleActions } from '@redux/actions';

describe('Home page', () => {
  let component;
  let instance;

  let exampleSaga;
  let decrement;

  beforeEach(() => {
    exampleSaga = spyOn(exampleActions, 'exampleSaga');
    decrement = spyOn(exampleActions, 'decrement');

    const actions = { decrement, exampleSaga };
    component = shallowWrapped(<Home {...actions} />);
    instance = component.instance();
  });

  it('should render without throwing an error', () => {
    expect(component).toBeDefined();
  });

  it('should run exampleSaga on mount', () => {
    instance.componentDidMount();
    expect(exampleSaga).toHaveBeenCalled();
  });

  it('should decrement', () => {
    instance.decrement();
    expect(decrement).toHaveBeenCalled();
  });
});
