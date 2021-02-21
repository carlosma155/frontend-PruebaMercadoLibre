import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Search from '../components/Search';
// import ItemsList from '../components/ItemsList';
// import ItemDetails from '../components/ItemDetails';
// import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Search} />
                    {/* <Route exact path="/items?search=" component={ItemsList} />
                    <Route exact path="/items/:id" component={ItemDetails} />
                    <Route component={NotFound} /> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App