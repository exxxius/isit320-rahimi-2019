import React, { useState, useEffect } from 'react';
import './App.css';

export default function SelectRepo() {
    let init = {
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
    const [rangData, setRangData] = useState(init);
    const [rangData2, setRangData2] = useState(init);

    useEffect( () => {
        querySysYouRang();
        queryGetRepoNames();
        querySetWorkingDir();
        },[]
    );

    function makeParams(params) {
        var esc = encodeURIComponent;
        return '?' + Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
    }

    async function querySysYouRang()  {
        try {
            let response = await fetch('/system-environment/you-rang');
            let result = await response.json();
            console.log(result);
            setRangData(result);
        } catch (ex) {
            alert(ex);
        }
    };

    async function queryGetRepoNames()  {
        try {
            let response = await fetch('/system-environment/getRepoNames');
            let result = await response.json();
            console.log(result);
            setRangData2(result);
            console.log('this is init: ', init);
            console.log('this is result: ', result);

        } catch (ex) {
            alert(ex);
        }
    };

    function repo (){
        querySysYouRang();
        queryGetRepoNames();
    }

    async function querySetWorkingDir() {
        const workingDirSelect = document.getElementById("workingDirSelect");
            const newWorkingDir = workingDirSelect.options[workingDirSelect.selectedIndex].text;
            const url = '/system-environment/setWorkingDir' + makeParams({newWorkingDir: newWorkingDir});
        try {
            let response = await fetch(url);
            let result = await response.json();
            console.log('this is QSWD result', result);
            setRangData(result);
            repo();
        } catch (ex) {
            alert(ex);
        }
    };


    return (
            <React.Fragment>
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
                        <td className="left"> {rangData.program}</td>
                    </tr>
                    <tr>
                        <td>result</td>
                        <td className="left"> {rangData.result}</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td className="left"> {rangData.file}</td>
                    </tr>
                    <tr>
                        <td>server</td>
                        <td className="left"> {rangData.server}</td>
                    </tr>
                    <tr>
                        <td>directory</td>
                        <td className="left"> {rangData.directory}</td>
                    </tr>
                    <tr>
                        <td>hostname</td>
                        <td className="left"> {rangData.hostname}</td>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td className="left"> {rangData.home}</td>
                    </tr>
                    <tr>
                        <td>WorkingDir</td>
                        <td className="left"> {rangData.workingDir}</td>
                    </tr>
                    {rangData2.repoName.map((repo, index) => {
                        return (
                            <tr key={index}>
                                <td>Repo Name</td>
                                <td>{repo}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                <p>Click on the GetRepo button to see the list of available repositories.</p>
                <button onClick={repo}>Get Repos</button>

                <div>
                    <select id="workingDirSelect">
                        return (
                        {rangData2.repoName.map((option, index) =>
                            <option key={index} value={index}>
                                {option}
                            </option>
                        )});
                    </select>
                </div>

                <div>
                    <p>
                        Select a repo and press the setWorkingdir button
                    </p>
                    <button onClick={querySetWorkingDir}>Set Working Dir</button>
                </div>

            </React.Fragment>
        );
}