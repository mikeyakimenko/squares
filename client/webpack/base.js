const webpack = require('webpack')

module.exports = (settings) => ({
  entry: `${settings.sourceDir}/${settings.runtimeFile}`,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.SC_ATTR': '"squares-fun"'
    })
  ]
})