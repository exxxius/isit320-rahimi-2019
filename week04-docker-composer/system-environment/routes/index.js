var express = require('express');
var router = express.Router();
const { checkoutBranch } = require('./exec-git.js');
const { checkGitIgnore } = require('./exec-git.js');

function splitStringOnAnyInstanceOfCharacter(path, character, countFromEnd) {
    const pathParts = path.split(character);
    return pathParts
        .slice(Math.max(pathParts.length - countFromEnd, 1))
        .join(character);
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
        home: process.env.HOME
    };
    response.send(rangData);
});

router.get('/checkoutBranch', function(request, response) {
    checkoutBranch(response, 'week03').catch(function(e) {
        console.log(e);
    });
});

router.get('/checkGitIgnore', function(request, response) {
    checkGitIgnore(response).catch(function(e) {
        console.log(e);
    });
});

module.exports = router;
