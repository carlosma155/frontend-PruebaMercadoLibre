import express from 'express';
import webpack from 'webpack';
import config  from './config';

const app = express();
const { port, env } = config

if (env === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { publicPath: webpackConfig.output.publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});