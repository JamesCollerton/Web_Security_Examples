import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import logger from '../js/util/logger'
import itemsRoute from './routes/items-route'

/*
  App Setup
*/
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config())

/*
  Middlewares
*/
app.use(webpackDevMiddleware(compiler, {
  publicPath: config().output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

/*
  Routes
*/
app.use('/items', itemsRoute)

/*
  React Container Setup
*/
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`App listening to ${PORT}....`)
  logger.info('Press Ctrl+C to quit.')
})