import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './page/App';
import Children from './page/StateManage/children';
import ContextDemo from './page/ContextDemo';
import HooksDemo from './page/HooksDemo';
import ReduxDemo from './page/Redux';
import StateManage from './page/StateManage';
import Form from './page/StateManage/form';
import Table from './page/StateManage/table';

export default class Router extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Route exact component={App} path="/"></Route>
                <Route component={Children} path="/children"></Route>
                <Route component={ContextDemo} path="/contextDemo"></Route>
                <Route component={HooksDemo} path="/hooksDemo"></Route>
                <Route component={ReduxDemo} path="/reduxDemo"></Route>
                <Route component={StateManage} path="/stateManage"></Route>
                <Route component={Form} path="/form"></Route>
                <Route component={Table} path="/table"></Route>
            </BrowserRouter>
        )
    }
}