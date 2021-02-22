import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ItemsList from '../containers/ItemsList';
import ItemDetails from '../containers/ItemDetails';
import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/items" component={ItemsList} />
                    <Route exact path="/items/:id" component={ItemDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App