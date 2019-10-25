import ReactDOM from 'react-dom'; //ADDED WEDNESDAY
import React, { Component } from 'react'; //ADDED WEDNESDAY

export default class App extends Component {

    queryYouRang = () => {
        fetch('/system-environment/you-rang')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const serverData = document.getElementById('sys-env-you-rang');
                serverData.textContent = JSON.stringify(result, null, 4);
            })
            .catch(ex => {
                alert(ex);
            });
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
    }

    queryCheckGitIgnore = () => {
        fetch('/system-environment/checkGitIgnore')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const serverData = document.getElementById(
                    'sys-env-checkGitIgnore'
                );
                serverData.textContent = JSON.stringify(result, null, 4);
            })
            .catch(ex => {
                alert(ex);
            });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to BRANCH WORKS!!!</h2>
                </div>

                <button
                    onClick={this.queryCheckout}>checkoutBranch</button>
                <button
                    onClick={this.queryCheckGitIgnore}>checkGitIgnore</button>
                <button
                    onClick={this.queryYouRang}>You Rang</button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root')); //ADDED WEDNESDAY