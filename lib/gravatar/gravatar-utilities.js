import md5 from 'js-md5';

export function gravatarUrl(email, size) {
  const hash = email ? md5(email.toLowerCase()) : '00000000000000000000000000000000';
  let url = `https://www.gravatar.com/avatar/${hash}?default=mp`;
  if (size) {
    url += `&s=${size}`;
  }
  return url;
}

