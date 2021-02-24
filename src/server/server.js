import express from 'express';
import axios from 'axios';
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
import Layout from '../frontend/components/Layout';


const app = express();
const { port, env, apiUrl } = config

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

const setResponse = (html, preloadedState) => {
  return (`
  <!DOCTYPE html>
  <html lang="en">  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/assets/app.css" type="text/css">
      <title>Prueba Mercado Libre</title>
  </head>
  
  <body>
      <div id="app">${html}</div>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/assets/app.js" type="text/javascript"></script>
  </body>
  
  </html>
  `);
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
      <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
              <Layout>
                {renderRoutes(serverRoutes)}
              </Layout>              
          </StaticRouter>
      </Provider>,
  );

  res.send(setResponse(html, preloadedState));
}

app.get('/serverItems', async (req, res, next) => {
    const { query } = req.query;

    try {
      const itemsList = await axios({
          url: `${apiUrl}/api/items?q=${query}`,
          method: 'get'
      })

      const items = itemsList.data.data;

      res.status(200).json(items)

    } catch (error) {
      next(error)
    }
})

app.get(`/serverItems/:itemId`, async (req, res, next) => {
    const { itemId } = req.params;

    try {
        const { data } = await axios({
            url: `${apiUrl}/api/items/${itemId}`,
            method: 'get'
        })
        
        const item = data.data;

        res.status(200).json(item)
      
    } catch (error) {
      next(error)
    }
})

app.get('*', renderApp);

app.listen(port, (err) => {
  err
     ? console.log(err)
     : console.log(`Server running on port ${port}`);
});