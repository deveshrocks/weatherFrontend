// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/weather',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Your backend API URL
      changeOrigin: true,
    })
  );
};