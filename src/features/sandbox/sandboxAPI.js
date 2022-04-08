import { http } from '@common/utils/http';

export function authenticatedRequest(ssrContext) {
  return http.get('/api/sandbox/asdf', null, ssrContext);
}

