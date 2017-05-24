module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
