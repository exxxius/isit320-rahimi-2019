var express = require('express');
var router = express.Router();
const {checkoutBranch} = require('./exec-git.js');
const {checkGitIgnore} = require('./exec-git.js');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Qux'
    });
});

router.get('/you-rang', (request, response) => {
    response.send({
        result: 'qux you rang',
        server: 'qux',
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME
    });
});

router.get('/checkoutBranch', function(request, response) {
    checkoutBranch(response, 'week05');
});

module.exports = router;
