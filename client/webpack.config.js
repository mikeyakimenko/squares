const merge = require('webpack-merge')
const SETTINGS = require('./webpack/settings')

const config = {
  base: require('./webpack/base'),
  development: require('./webpack/development'),
  production: require('./webpack/production')
}

module.exports = (env) => {
  const webpackConfig = merge(config.base(SETTINGS), config[env](SETTINGS))
  
  if (!webpackConfig) {
    console.warn('There is no config!')
  }

  return webpackConfig
}
