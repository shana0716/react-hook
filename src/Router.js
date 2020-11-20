import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './page/App';
import Children from './page/children';
import ContextDemo from './page/ContextDemo';
import HooksDemo from './page/HooksDemo';
import ReduxDemo from './page/Redux';

export default class Router extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Route exact component={App} path="/"></Route>
                <Route component={Children} path="/children"></Route>
                <Route component={ContextDemo} path="/contextDemo"></Route>
                <Route component={HooksDemo} path="/hooksDemo"></Route>
                <Route component={ReduxDemo} path="/reduxDemo"></Route>
            </BrowserRouter>
        )
    }
}