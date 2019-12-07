var express = require('express');
var router = express.Router();
const { badFilesTest, checkGitIgnore, getBranches, checkoutBranch, setWorkingDir, getRepoNames, getWorkingDir } = require('./exec-git.js');

function splitStringOnAnyInstanceOfCharacter(path, character, countFromEnd) {
    const pathParts = path.split(character);
    return pathParts
        .slice(Math.max(pathParts.length - countFromEnd, 1))
        .join(character);
}

function makeParams(params) {
    var esc = encodeURIComponent;
    return '?' + Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Environment Rahimi'
    });
});

router.get('/you-rang', function(request, response) {
    const rangData = {
        program: 'system-environment',
        file: 'routes/index.js',
        result: 'system-environment you rang',
        server: 'system-environment',
        directory: splitStringOnAnyInstanceOfCharacter(__dirname, '/', 2),
        hostname: process.env.HOSTNAME,
        home: process.env.HOME,
        workingDir: getWorkingDir()
    };
    response.send(rangData);
});

router.get('/checkoutBranch', function(request, response) {
    checkoutBranch(response,'master').catch(function(e) {
        console.log(e);
    });
});

router.get('/checkGitIgnore', function(request, response) {
    checkGitIgnore(response).catch(function(e) {
        console.log(e);
    });
});

router.get('/badFilesTest', function(request, response) {
    badFilesTest(response).catch(function(e) {
        console.log(e);
    });
});

router.get('/getBranches', function(request, response) {
    getBranches(response).catch(function(e) {
        console.log(e);
    });
});

//Added on wednesday 11-20-2019
router.get('/getRepoNames', function(request, response) {
    getRepoNames(response).catch(function(e) {
        console.log(e);
    });
});

//Added on wednesday 11-20-2019
router.get('/setWorkingDir' , function(request, response) {
    //setWorkingDir(response).catch(function(e) {
    //response.send(setWorkingDir(request.query.newWorkingDir));
    //console.log(e);
    //});
    //setWorkingDir(response.send({workingDir: request.query.value}));
    setWorkingDir(request.query.WorkingDir);
    response.send(request.query);
    console.log('SYSENV ROUTER SETWORKINGDIR CALLED',request.query );
});


module.exports.splitStringOnAnyInstanceOfCharacter = splitStringOnAnyInstanceOfCharacter;
module.exports = router;
