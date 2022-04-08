import cookie from 'cookie';

export function createDefaultHttpOptions(req) {
  const dev = process.env.NODE_ENV !== 'production';
  const options = {
    headers: {}
  };

  // application/json by default
  options.headers['Content-Type'] = 'application/json';

  // set auth header from the token cookie
  const cookieSource = req ? req.headers.cookie : document.cookie;
  const cookies = cookie.parse(cookieSource || '');
  const token = cookies.token;

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  // fix Node "unable to verify the first certificate" errors during SSR in dev
  if (dev && req) {
    const https = require('https');
    options['agent'] = new https.Agent({ rejectUnauthorized: false });
  }

  // remove Content-Type for file uploads
  if (typeof(window) !== 'undefined' && body instanceof FormData) {
    delete options.headers['Content-Type'];
  }

  return options;
}

