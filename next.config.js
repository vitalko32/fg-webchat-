const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['graph.facebook.com'], // If to display Facebook profile pictures
  },
  reactStrictMode: true,
});