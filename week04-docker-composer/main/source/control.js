/**
 * Created by charlie on 11/5/16.
 */

//$(document).ready(function() {});

window.onload = function() {
    fetch('/system-environment/you-rang')
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            const serverData = document.getElementById('system-environment');
            serverData.textContent = JSON.stringify(result, null, 4);
        })
        .catch((ex) => {
            alert(ex);
        });

    fetch('/route-tester/you-rang')
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            const serverData = document.getElementById('route-tester');
            serverData.textContent = JSON.stringify(result, null, 4);
        })
        .catch((ex) => {
            alert(ex);
        });
};
