const path = require('path')
const version = process.env.npm_package_version

module.exports = {
  version,
  outputProductionDir: path.resolve(__dirname, '../dist'),
  sourceDir: path.resolve(__dirname, '../src'),
  publicDir: path.resolve(__dirname, '../public'), 
  runtimeFile: 'index.tsx',
  port: 3000,
  apiUrls: {
    production: '...',
    development: 'http://localhost:3001'
  }
}