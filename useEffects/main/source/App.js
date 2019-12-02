import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetBranches from './GetBranches';
import YouRang from './You-Rang';
import CheckGitIgnore from './CheckGitIgnore';
import BadFilesTest from './BadFilesTest';
import SelectRepo from './SelectRepo';

export default class App extends Component {

    render() {
        return (
                <Router>
                        <div>
                            <h2>Welcome to BRANCH WORKS MENU!</h2>
                        </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/get-branches">Get Branches</Link>
                                </li>
                                <li>
                                    <Link to="/you-rang">You-Rang</Link>
                                </li>
                                <li>
                                    <Link to="/checkgitignore">Check gitIgnore</Link>
                                </li>
                                <li>
                                    <Link to="/badFilesTest">Bad Files Test</Link>
                                </li>
                                <li>
                                    <Link to="/selectRepo">Select Repos</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/get-branches">
                                <GetBranches />
                            </Route>
                            <Route path="/you-rang">
                                <YouRang />
                            </Route>
                            <Route path="/CheckGitIgnore">
                                <CheckGitIgnore/>
                            </Route>
                            <Route path="/badFilesTest">
                                <BadFilesTest/>
                            </Route>
                            <Route path="/selectRepo">
                                <SelectRepo/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
        );
    }
}