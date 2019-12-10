import { Http } from '@lib/http';

describe('Http utilities', () => {
  let http;

  beforeEach(() => {
    http = new Http();
  });

  it('should set baseUrl', () => {
    http.setBaseUrl('http://localhost:3000');
    expect(http.defaults.baseUrl).toBe('http://localhost:3000');
  });

  it('should add headers', () => {
    http.addHeader('Authorization', 'test');
    expect(http.defaults.headers['Authorization']).toBe('test');
  });

  it('should add interceptors', () => {
    http.addInterceptor(404, () => console.log('test'));
    expect(http.defaults.interceptors[404]).toBeTruthy();
  });

  it('should make requests', () => {
    const mockResponse = { status: 200, json: () => '' };
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
    const mockResponse = { status: 200, json: () => '' };
    const spy = spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.setBaseUrl('http://localhost:3000');
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
    const mockResponse = { status: 200, json: () => '' };
    const spy = spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.setBaseUrl('http://localhost:3000');
    http.addHeader('Authorization', 'test');
    http.request('/test', 'GET', undefined, { headers: { 'Content-Type': 'application/test' } });

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/test', expectedOptions);
  });

  it('should intercept requests', (done) => {
    const mockResponse = { status: 404, json: () => '' };
    spyOn(http, 'requestFn').and.returnValue(Promise.resolve(mockResponse));

    http.addInterceptor(404, (response) => {
      expect(response.status).toBe(404);
      done();
    });

    http.request('/test');
  });
});

