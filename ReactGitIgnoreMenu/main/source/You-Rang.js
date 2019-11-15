import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';

export class YouRang extends Component {
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
            home: 'unknown'
        };
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

    render() {
        return (
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
        );
    }
}
export default YouRang;