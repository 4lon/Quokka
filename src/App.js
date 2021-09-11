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

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
