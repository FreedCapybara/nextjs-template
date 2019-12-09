
// Combines the other two utility functions
export function getLocale(req, defaultLocale) {
  if (req) {
    return getServerLocale(req, defaultLocale);
  } else {
    return getBrowserLocale(defaultLocale);
  }
}

export function getServerLocale(req, defaultLocale) {
  let headerLocale = null;
  if (req) {
    const accepts = require('accepts');
    const accept = accepts(req);
    headerLocale = accept.languages()[0];
  }
  return headerLocale || defaultLocale || 'en';
}

export function getBrowserLocale(defaultLocale) {
  let navigatorLocale = navigator.languages != null ? navigator.languages[0] : navigator.language;
  return navigatorLocale || defaultLocale || 'en';
}
