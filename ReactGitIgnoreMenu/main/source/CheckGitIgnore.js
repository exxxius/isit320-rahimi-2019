import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';

export class CheckGitIgnore extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            gitIgnoreTests: [{ branch: 'unknown', missing: ['none'] }]
        };
        this.queryCheckGitIgnore = this.queryCheckGitIgnore.bind(this);
    }

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

    render() {
        return (
                <React.Fragment>

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
                </React.Fragment>
        );
    }
}
export default CheckGitIgnore;