const DevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const debug = require('debug')('shakyo:server')

const compiler = webpack(config)

let server = new DevServer(compiler, {
  contentBase: 'public',
  hot: true,
  historyApiFallback: false,
  compress: false,
  staticOptions: {},

  // webpack-dev-middleware options
  quiet: false,
  noInfo: true,
  publicPath: '/',
  stats: { colors: true }
})

server.listen(3000, 'localhost', function (err) {
  if (err) {
    console.error(err)
    return
  }
  debug(`webpack-dev-server listening at http://localhost:3000`)
})
