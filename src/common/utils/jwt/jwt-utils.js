
export const jwtUtils = {
  parseJwt
};

function parseJwt (token) {
  if (!token) {
    return null;
  }

  // from https://stackoverflow.com/a/38552302
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

