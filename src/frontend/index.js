import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router'
import thunk from 'redux-thunk';
import reducer from './reducers'
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

delete window.__PRELOADED_STATE__;

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>        
    </Provider>,
    document.getElementById('app')
);