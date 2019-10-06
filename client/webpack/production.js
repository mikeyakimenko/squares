const webpack = require('webpack')

module.exports = (settings) => ({
  output: {
    filename: `app.${settings.version}.js`,
    path: settings.outputProductionDir
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(settings.apiUrls.productoin)
    })
  ]
})