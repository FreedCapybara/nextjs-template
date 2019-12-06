
// Combines the other two utility functions
export function getLocale(req, defaultLocale) {
  if (req) {
    return getServerLocale(req, defaultLocale);
  } else {
    return getBrowserLocale(defaultLocale);
  }
}

export function getServerLocale(req, defaultLocale) {
  const accepts = await import('accepts');
  const accept = accepts(req);
  return accept.language(supportedLanguages) || defaultLocale || 'en';
}

export function getBrowserLocale(defaultLocale) {
  if (navigator.languages != undefined) {
    return navigator.languages[0] || defaultLocale || 'en';
  } else {
    return navigator.language || defaultLocale || 'en';
  }
}
