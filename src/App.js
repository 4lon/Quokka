import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
import Login from "./screens/login/Login"
import Header from './screens/header/Header';
import Learn from './screens/learn/Learn'
import Creator from './screens/creator/Creator'
import Questions from "./screens/questions/Questions";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Header/>
                <Switch>
                    <Route path="/learn">
                        <Learn />
                    </Route>
                    <Route path="/create">
                        <Creator />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
