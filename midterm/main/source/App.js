import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            program: 'unknown',
            file: 'unknown',
            result: 'unknown',
            server: 'unknown',
            directory: 'unknown',
            hostname: 'unknown',
            home: 'unknown',
            branches: ['unknown'],
            gitIgnoreTests: [{ branch: 'unknown', missing: ['none'] }],
            badFilesTest: [{ branch: 'unknown', badFile: ['none'] }]
        };
        this.queryGetBranches = this.queryGetBranches.bind(this);
        this.queryCheckGitIgnore = this.queryCheckGitIgnore.bind(this);
        this.queryBadFilesTest = this.queryBadFilesTest.bind(this);
    }

    querySysYouRang = () => {
        const that = this;
        fetch('/system-environment/you-rang')
            .then(response => response.json())
            .then(result => {
                that.setState(result);
                console.log(result);
            }).catch(ex => {
            alert(ex);
        });
    };
    queryRouteTesterYouRang = () => {
        const that = this;
        fetch('/route-tester/you-rang')
            .then(response => response.json())
            .then(result => {
                that.setState(result);
                console.log(result);
            }).catch(ex => {
            alert(ex);
        });
    };

    queryBadFilesTest = async () => {
        try {
            let response = await fetch('/system-environment/badFilesTest');
            let result = await response.json();
            console.log('querybadFilesTest result: ', result);
            this.setState({ badFilesTest: result });
        } catch (ex) {
            alert(ex);
        }
    };

    queryCheckGitIgnore = async () => {
        try {
            let response = await fetch('/system-environment/CheckGitIgnore');
            const result = await response.json();
            console.log('queryCheckGitIgnore result: ', result);
            this.setState({ gitIgnoreTests: result });
        } catch (ex) {
            alert(ex);
        }
    };

    queryGetBranches = async () => {
        try {
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log('queryGetBranches result: ', result.response);
            this.setState({ branches: result.response });
        } catch (ex) {
            alert(ex);
        }
    };

    queryCheckout = () => {
        fetch('/system-environment/checkoutBranch')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const serverData = document.getElementById(
                    'sys-env-checkoutBranch'
                );
                serverData.textContent = JSON.stringify(result, null, 4);
            })
            .catch(ex => {
                alert(ex);
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to BRANCH WORKS!!!</h2>
                </div>
                <React.Fragment>
                    <h2>You Rang</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>program</td>
                            <td className="left"> {this.state.program}</td>
                        </tr>
                        <tr>
                            <td>result</td>
                            <td className="left"> {this.state.result}</td>
                        </tr>
                        <tr>
                            <td>file</td>
                            <td className="left"> {this.state.file}</td>
                        </tr>
                        <tr>
                            <td>server</td>
                            <td className="left"> {this.state.server}</td>
                        </tr>
                        <tr>
                            <td>directory</td>
                            <td className="left"> {this.state.directory}</td>
                        </tr>
                        <tr>
                            <td>hostname</td>
                            <td className="left"> {this.state.hostname}</td>
                        </tr>
                        <tr>
                            <td>Home</td>
                            <td className="left"> {this.state.home}</td>
                        </tr>
                        </tbody>
                    </table>

                    <button onClick={this.querySysYouRang}>SysENV YouRang</button>
                    <button onClick={this.queryRouteTesterYouRang}>RouteTester YouRang</button>
                </React.Fragment>
                <div>
                    <h1>Get All Branches</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.branches.map((branch, index) => {
                            return (
                                <tr key={index}>
                                    <td>Branch</td>
                                    <td>{branch}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <button
                        onClick={this.queryGetBranches}>get branches
                    </button>
                </div>
                <h1>GitIgnore Test</h1>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Branch Name</th>
                            <th>Missing Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.gitIgnoreTests.map((branch, index) => {
                            return (
                                <tr key={index}>
                                    <td>{branch.branch}</td>
                                    <td>{branch.missing}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <button
                        onClick={this.queryCheckGitIgnore}> gitIgnore Test
                    </button>
                </div>
                <div>
                    <h1> Bad Files Test</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Branch</th>
                            <th>Bad File</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.badFilesTest.map((badFile, index) => {
                            return (
                                <tr key={index}>
                                    <td>{badFile.branch}</td>
                                    <td>{badFile.badFile}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <button
                        onClick={this.queryBadFilesTest}> Bad Files
                    </button>
                </div>
                <p>
                    <button
                        onClick={this.queryCheckout}>checkoutBranch
                    </button>
                </p>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root')); //ADDED WEDNESDAY