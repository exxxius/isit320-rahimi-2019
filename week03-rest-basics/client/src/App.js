import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: 'unknown',
            program: 'unknown',
            result: 'unknown',
            route: 'unknown',
            server: 'unknown'
        };
    }

    queryServer = (event) => {
        const that = this;
        fetch(event.currentTarget.dataset.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <div className="App-intro">
                    <p>Main result: {this.state.result} file: {this.state.file} program: {this.state.program}</p>
                    <p>Qux result: {this.state.result} file: {this.state.route} program: {this.state.server}</p>
                    <p>SYS ENV result: {this.state.result} file: {this.state.route} program: {this.state.server}</p>
                </div>
                <button data-url="/you-rang" onClick={this.queryServer}>Call Main Server</button>
                <button data-url="/qux/you-rang" onClick={this.queryServer}>Call Qux</button>
                <button data-url="/system-environment/you-rang" onClick={this.queryServer}>Call System Environment</button>
            </div>
        );
    }
}

export default App;