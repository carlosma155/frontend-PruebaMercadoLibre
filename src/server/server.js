import express from 'express';
import webpack from 'webpack';
import config  from './config';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers'
import initialState from '../frontend/initialState';

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

const setResponse = (html) => {
  return (
    `
  <!DOCTYPE html>
    <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="assets/app.css" type="text/css">
          <title>Prueba Mercado Libre</title>
      </head>
      <body>
          <div id="app">${html}</div>
          <script src="assets/app.js" type="text/javascript"></script>
      </body>
  </html>`
  )
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes)}
        </StaticRouter>
    </Provider>
  )
  
  res.send(setResponse(html))
}

app.get('*', renderApp);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});