const webpack = require('webpack')
const path = require('path')

module.exports = (settings) => {
  console.log(settings.publicDir)
  
  return ({
    output: {
      filename: 'app.js'
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: {
        index: '/'
      },
      contentBase: settings.publicDir,
      port: settings.port
    },
    plugins: [
      new webpack.DefinePlugin({
        'API_URL': JSON.stringify(settings.apiUrls.development)
      })
    ]
  })
} 