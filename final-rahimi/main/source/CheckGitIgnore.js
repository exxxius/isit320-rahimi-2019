//import React, { Component } from 'react'; //ADDED WEDNESDAY
import React, { useState, useEffect } from 'react';
import './App.css';

export default function CheckGitIgnore()  {
    const [gitIgnoreTests, setTests] = useState([{ branch: 'unknown', missing: ['none'] }]);

    useEffect( () => {
        queryCheckGitIgnore();
        },[]
    );
    async function queryCheckGitIgnore () {
        try {
            let response = await fetch('/system-environment/CheckGitIgnore');
            const result = await response.json();
            console.log('queryCheckGitIgnore result: ', result);
            setTests(result);
        } catch (ex) {
            alert(ex);
        }
    };

        return (
                <React.Fragment>

                <h1>GitIgnore Test</h1>
                <div>
                    <table id="branchTable">
                        <thead>
                        <tr>
                            <th>Branch Name</th>
                            <th>Missing Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {gitIgnoreTests.map((branch, index) => {
                            return (
                                <tr key={index}>
                                    <td>{branch.branch}</td>
                                    <td>{branch.missing}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                </React.Fragment>
        );
}