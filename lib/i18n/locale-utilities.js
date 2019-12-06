
// Combines the other two utility functions
export function getLocale(req, defaultLocale) {
  if (req) {
    return getServerLocale(req, defaultLocale);
  } else {
    return getBrowserLocale(defaultLocale);
  }
}

export function getServerLocale(req, defaultLocale) {
  const accepts = require('accepts');
  const accept = accepts(req);
  return accept.languages()[0] || defaultLocale || 'en';
}

export function getBrowserLocale(defaultLocale) {
  if (navigator.languages != undefined) {
    return navigator.languages[0] || defaultLocale || 'en';
  } else {
    return navigator.language || defaultLocale || 'en';
  }
}
