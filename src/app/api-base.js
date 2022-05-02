
const dev = process.env.NODE_ENV !== 'production';

export const apiBaseUrl = process.env.API_BASE_URL || (dev ? 'http://localhost:3000' : 'https://prod-url');

