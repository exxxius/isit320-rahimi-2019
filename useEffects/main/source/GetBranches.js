import React, { useState, useEffect } from 'react';
import './App.css';

export default function GetBranches() {
    const [branches, setBranches] = useState(['unknown']);

    useEffect( () => {
        queryGetBranches();
        queryCheckout ();
        },[]
    );
    async function queryGetBranches() {
        try {
            let response = await fetch('/system-environment/getBranches');
            let result = await response.json();
            console.log('queryGetBranches result: ', result.response);
            setBranches(result.response);
        } catch (ex) {
            alert(ex);
        }
    };

    async function queryCheckout () {
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
                    {branches.map((branch, index) => {
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
                    onClick={queryGetBranches}>get branches
                </button>
                <div>
                    <h3>Checkout Master Branch</h3>
                    <button
                        onClick={queryCheckout}>Checkout master
                    </button>
                    <pre id="sys-env-checkoutBranch"></pre>
                </div>
            </div>
        );
}