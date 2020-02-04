import { appActions } from '@redux/actions';

describe('App actions', () => {

  it('should setLoading', () => {
    const result = appActions.setLoading(true);
    expect(result.type).toBe('SET_APP_LOADING');
    expect(result.loading).toBe(true);
  });

  it('should showModal', () => {
    const result = appActions.showModal('test', 'content');
    expect(result.type).toBe('SHOW_MODAL');
    expect(result.modalTitle).toBe('test');
    expect(result.modalContent).toBe('content');
  });

  it('should hideModal', () => {
    const result = appActions.hideModal();
    expect(result.type).toBe('HIDE_MODAL');
  });

  it('should setError', () => {
    const result = appActions.setError(true);
    expect(result.type).toBe('SET_APP_ERROR');
    expect(result.error).toBe(true);
  });
});
