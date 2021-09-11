import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./screens/homepage/Homepage";
// import Submission from "./screens/Learn/Submission";
import Learn from "./screens/learn/Learn"
// import Login from "./screens/login/Login"

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>

                    <Route path="/learn">
                        <Learn />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
