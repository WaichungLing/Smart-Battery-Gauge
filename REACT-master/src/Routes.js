import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './History'
import App from "./App";
import ChartPaper from "./ChartPaper";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Chart" component={ChartPaper} />
                </Switch>
            </Router>
        )
    }
}