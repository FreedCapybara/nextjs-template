import { Http, http } from '@lib/http';

describe('Http utilities', () => {

  beforeEach(() => {
    http.isConfigured = false;
    http.defaults = {
      baseUrl: '',
      headers: {},
      interceptors: {} // 404: (response) => {}
    };
  });

  it('should configure', () => {
    Http.configure((client) => {
      expect(client).toBeTruthy();
    });
    expect(http.isConfigured).toBe(true);
  });

  it('should not configure if already configured', () => {
    http.isConfigured = true;
    Http.configure(() => {
      // shouldn't run -- assert some contradictions
      expect(true).toBe(false); // skepticism
      expect(false).toBe(true); // wishfulness
    });
    expect(http.isConfigured).toBe(true);
  });

  it('should make requests', () => {
    const mockResponse = { status: 200 };
    const spy = spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));
    http.request('/test');
    expect(spy).toHaveBeenCalled();
  });

  it('should GET', () => {
    const spy = spyOn(http, 'request');
    http.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', 'GET', undefined, undefined);
  });

  it('should POST', () => {
    const spy = spyOn(http, 'request');
    http.post('/test', { test: 5 });
    expect(spy).toHaveBeenCalledWith('/test', 'POST', JSON.stringify({ test: 5 }), undefined);
  });

  it('should PUT', () => {
    const spy = spyOn(http, 'request');
    http.put('/test', { test: 5 });
    expect(spy).toHaveBeenCalledWith('/test', 'PUT', JSON.stringify({ test: 5 }), undefined);
  });

  it('should PATCH', () => {
    const spy = spyOn(http, 'request');
    http.patch('/test', { test: 5 });
    expect(spy).toHaveBeenCalledWith('/test', 'PATCH', JSON.stringify({ test: 5 }), undefined);
  });

  it('should DELETE', () => {
    const spy = spyOn(http, 'request');
    http.delete('/test');
    expect(spy).toHaveBeenCalledWith('/test', 'DELETE', undefined, undefined);
  });

  it('should use the base url', () => {
    const expectedOptions = {
      method: 'GET',
      headers: {}
    };
    const mockResponse = { status: 200 };
    const spy = spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.defaults.baseUrl = 'http://localhost:3000';
    http.request('/test', 'GET');

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/test', expectedOptions);
  });

  it('should add default headers', () => {
    const expectedOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/test',
        'Authorization': 'test'
      }
    };
    const mockResponse = { status: 200 };
    const spy = spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.defaults.baseUrl = 'http://localhost:3000';
    http.defaults.headers['Authorization'] = 'test';
    http.request('/test', 'GET', undefined, { headers: { 'Content-Type': 'application/test' } });

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/test', expectedOptions);
  });

  it('should intercept requests', (done) => {
    const mockResponse = { status: 404 };
    spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.defaults.interceptors[404] = (response) => {
      expect(response.status).toBe(404);
      done();
    };

    http.request('/test');
  });

  it('should reject errors', (done) => {
    spyOn(http, 'requestFn').and.returnValue(Promise.reject());
    http.request('/test')
      .then(() => done.fail())
      .catch(() => done());
  });

  it('should call onFail', (done) => {
    http.onFail = () => done();
    spyOn(http, 'requestFn').and.returnValue(Promise.reject('TypeError: Failed to fetch'));
    http.request('/test')
      .catch(() => {});
  });
});

