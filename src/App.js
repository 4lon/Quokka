import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
// import Login from "./screens/login/Login"

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;