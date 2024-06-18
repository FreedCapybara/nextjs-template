import { http } from '@utils/http';

export const sandboxAPI = {
  sandboxRequest
};

function sandboxRequest(ssrContext) {
  return http.get('/api/sandbox/auth-test', null, ssrContext);
}

