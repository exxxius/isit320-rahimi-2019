import React, { useState } from 'react';
import './App.css';

export default function BadFilesTest() {
    const [badFilesTest, setTests] = useState([{ branch: 'unknown', badFile: ['none'] }]);

    async function queryBadFilesTest() {
        try {
            let response = await fetch('/system-environment/badFilesTest');
            let result = await response.json();
            console.log('querybadFilesTest result: ', result);
            setTests(result);
        } catch (ex) {
            alert(ex);
        }
    };

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
                    {badFilesTest.map((badFile, index) => {
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
                    onClick={queryBadFilesTest}> Bad Files
                </button>
            </div>
        </React.Fragment>
    );
}