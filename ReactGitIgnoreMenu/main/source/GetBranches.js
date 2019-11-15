import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY
import './App.css';

export class GetBranches extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            branches: ['unknown']
        };
    }

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
    //Didn't change this query to async-await as it's not required.
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
            <div>
                <h2>Get All Branches</h2>
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
                <div>
                    <h3>Checkout Master Branch</h3>
                    <button
                        onClick={this.queryCheckout}>Checkout master
                    </button>
                    <pre id="sys-env-checkoutBranch"></pre>
                </div>
            </div>
        );
    }
}

export default GetBranches;