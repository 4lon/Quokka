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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Header from './screens/header/Header';
>>>>>>> Jamie2
=======
import Header from './screens/header/Header';
import Learn from './screens/learn/Learn'
>>>>>>> Alon2

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                {/* <Header/> */}
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
<<<<<<< HEAD
=======
                </Switch>
                <Header/>
                <Switch>
                    <Route path="/learn">
                        <Learn />
                    </Route>
>>>>>>> Alon2
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
