import md5 from 'js-md5';

export function getGravatarUrl(email, size, defaultImage) {
  const hash = email ? md5(email.toLowerCase()) : '00000000000000000000000000000000';
  const d = defaultImage || 'mp'; // or 'identicon' and 'retro' are good ones, too -- see https://en.gravatar.com/site/implement/images/
  let url = `https://www.gravatar.com/avatar/${hash}?default=${d}`;
  if (size) {
    url += `&s=${size}`;
  }
  return url;
}

