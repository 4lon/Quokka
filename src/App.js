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
        // <div className="app">
        //     <Router>
        //         <Switch>
        //             <Route exact path="/" component={Login} />
        //         </Switch>
        //     </Router>
        // </div>
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
                    {/*<Route exact path="/" component={Login} />*/}
                    <Route path="/">
                        <Homepage />
                    </Route>
                    {/*<Route exact path="/login">*/}
                    {/*    <Login />*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
