
const dev = process.env.NODE_ENV !== 'production';

const apiBaseUrl = process.env.API_BASE_URL || (dev ? 'https://localhost:3000' : 'https://prod-url');
module.exports = apiBaseUrl;

