import { getLocale, getServerLocale, getBrowserLocale } from '@lib/i18n';

describe('Locale utilities', () => {

  it('should get browser locale default', () => {
    Object.defineProperty(navigator, 'languages', { get: () => null, configurable: true });
    Object.defineProperty(navigator, 'language', { get: () => null, configurable: true });
    const result = getBrowserLocale();
    expect(result).toBe('en');
  });

  it('should get browser locale with provided default', () => {
    Object.defineProperty(navigator, 'languages', { get: () => null, configurable: true });
    Object.defineProperty(navigator, 'language', { get: () => null, configurable: true });
    const result = getBrowserLocale('fr');
    expect(result).toBe('fr');
  });

  it('should get browser locale from navigator language', () => {
    Object.defineProperty(navigator, 'languages', { get: () => null, configurable: true });
    Object.defineProperty(navigator, 'language', { get: () => 'de-DE', configurable: true });
    const result = getBrowserLocale();
    expect(result).toBe('de');
  });

  it('should get browser locale from the first navigator language', () => {
    Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'fr'], configurable: true });
    Object.defineProperty(navigator, 'language', { get: () => null, configurable: true });
    const result = getBrowserLocale();
    expect(result).toBe('es');
  });

  it('should get server locale default', () => {
    const result = getServerLocale();
    expect(result).toBe('en');
  });

  it('should get server locale with provided default', () => {
    const result = getServerLocale(null, 'fr');
    expect(result).toBe('fr');
  });

  it('should get server locale from the request', () => {
    const req = {
      headers: {
        'accept-language': 'de-DE, de;q=0.9'
      }
    };
    const result = getServerLocale(req);
    expect(result).toBe('de');
  });

  it('should get locale in the browser', () => {
    // not sure how to spy on functions that aren't attached to a class/object -- have to just run it
    Object.defineProperty(navigator, 'languages', { get: () => null, configurable: true });
    Object.defineProperty(navigator, 'language', { get: () => 'it', configurable: true });
    const result = getLocale(null);
    expect(result).toBe('it');
  });

  it('should get locale on the server', () => {
    // not sure how to spy on functions that aren't attached to a class/object -- have to just run it
    const req = {
      headers: {
        'accept-language': 'es;q=0.9'
      }
    };
    const result = getLocale(req);
    expect(result).toBe('es');
  });
});

