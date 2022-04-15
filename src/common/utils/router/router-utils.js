import Router from 'next/router';

export const routerUtils = {
  clientRedirect,
  serverRedirect,
  universalRedirect
};

function clientRedirect(location) {
  Router.push(location);
}

function serverRedirect(res, location) {
  res.writeHead(302, {
    Location: location
  });
  res.end();
}

function universalRedirect(res, location) {
  if (res) {
    routerUtils.serverRedirect(res, location);
  } else {
    routerUtils.clientRedirect(location);
  }
}

