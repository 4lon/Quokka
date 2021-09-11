import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./screens/Homepage";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <nav>

                    <h1 className="Heading">QUOKKA.IO</h1>
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/">Home</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/about">About</Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/users">Users</Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </nav>
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
