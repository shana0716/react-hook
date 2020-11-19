import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './page/App';
import Children from './page/children';
import ContextDemo from './page/ContextDemo';

export default class Router extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Route exact component={App} path="/"></Route>
                <Route component={Children} path="/children"></Route>
                <Route component={ContextDemo} path="/contextDemo"></Route>
            </BrowserRouter>
        )
    }
}