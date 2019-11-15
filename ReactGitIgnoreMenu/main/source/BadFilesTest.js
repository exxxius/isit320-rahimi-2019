import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';

export class BadFilesTest extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            badFilesTest: [{ branch: 'unknown', badFile: ['none'] }]
        };
        this.queryBadFilesTest = this.queryBadFilesTest.bind(this);
    }

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

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Bad Files Test</h1>
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
            </React.Fragment>
        );
    }
}
export default BadFilesTest;