import React, { useState, useEffect } from 'react';
import './App.css';

export default function YouRang() {
    const init = {
        program: 'unknown',
        file: 'unknown',
        result: 'unknown',
        server: 'unknown',
        directory: 'unknown',
        hostname: 'unknown',
        home: 'unknown',
        workingDir: 'unknown',
        repoName: ['unknown']
    };

    const [youRangData, setYouRangData] = useState(init);

    useEffect( () => {
        querySysYouRang();
    },[]
    );
    async function querySysYouRang()  {
        try {
            let response = await fetch('/system-environment/you-rang');
            let result = await response.json();
            console.log(result);
            setYouRangData(result);
        } catch (ex) {
            alert(ex);
        }
    };
    async function queryRouteTesterYouRang () {
        try {
            let response = await fetch('/route-tester/you-rang');
            let result = await response.json();
            console.log(result);
            setYouRangData(result);
        } catch (ex) {
            alert(ex);
        }
    };

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
                        <td className="left"> {youRangData.program}</td>
                    </tr>
                    <tr>
                        <td>result</td>
                        <td id="you-rang-result" className="left"> {youRangData.result}</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td className="left"> {youRangData.file}</td>
                    </tr>
                    <tr>
                        <td>server</td>
                        <td className="left"> {youRangData.server}</td>
                    </tr>
                    <tr>
                        <td>directory</td>
                        <td className="left"> {youRangData.directory}</td>
                    </tr>
                    <tr>
                        <td>hostname</td>
                        <td className="left"> {youRangData.hostname}</td>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td className="left"> {youRangData.home}</td>
                    </tr>
                    <tr>
                        <td>Working Directory</td>
                        <td className="left"> {youRangData.workingDir}</td>
                    </tr>

                    </tbody>
                </table>

                <button onClick={querySysYouRang}>SysENV YouRang</button>
                <button onClick={queryRouteTesterYouRang}>RouteTester YouRang</button>
            </React.Fragment>
        );
}