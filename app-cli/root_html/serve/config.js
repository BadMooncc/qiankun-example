module.exports = {
  '/api': {
    target: 'http://192.168.124.98:8000',
    pathRewrite: { '^/api': '/' }
  }
}