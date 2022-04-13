import { http } from '@utils/http';

export function authenticatedRequest(ssrContext) {
  return http.get('/api/sandbox/asdf', null, ssrContext);
}

