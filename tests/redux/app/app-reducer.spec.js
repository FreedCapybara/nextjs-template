import { appReducer, appInitialState } from '@redux/app/app-reducer';

describe('App reducer', () => {

  it('should default to the current state', () => {
    const result = appReducer(undefined, { type: 'TEST' });
    expect(result.loading).toBe(false);
    expect(result.error).toBe(false);
  });

  it('should set loading', () => {
    const loading = true;
    const result = appReducer(appInitialState, { type: 'SET_APP_LOADING', loading });
    expect(result.loading).toBe(true);
  });

  it('should show modal', () => {
    const modalTitle = 'test';
    const modalContent = 'content';
    const result = appReducer(appInitialState, { type: 'SHOW_MODAL', modalTitle, modalContent });
    expect(result.showModal).toBe(true);
    expect(result.modalTitle).toBe('test');
    expect(result.modalContent).toBe('content');
  });

  it('should hide modal', () => {
    const result = appReducer(appInitialState, { type: 'HIDE_MODAL' });
    expect(result.showModal).toBe(false);
    expect(result.modalTitle).toBe('');
    expect(result.modalContent).toBe(null);
  });

  it('should set error', () => {
    const error = true;
    const result = appReducer(appInitialState, { type: 'SET_APP_ERROR', error });
    expect(result.error).toBe(true);
  });
});
