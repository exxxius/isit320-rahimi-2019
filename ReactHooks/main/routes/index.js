var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Main Page Rahimi'
    });
});

////ADDED WEDNESDAY


const requester = require('request');
router.get('/system-environment/you-rang', function(req, res) {
    requester('http://system-environment:30028/you-rang').pipe(res);
});

// Added getBranches 10/28/2019 in Class
router.get('/system-environment/getBranches', function(req, res) {
    console.log('getBranches Main called.');
    requester('http://system-environment:30028/getBranches').pipe(res);
});

router.get('/system-environment/checkoutBranch', function(req, res) {
    requester('http://system-environment:30028/checkoutBranch').pipe(res);
});

router.get('/system-environment/checkGitIgnore', function(req, res) {
    requester('http://system-environment:30028/checkGitIgnore').pipe(res);
});

router.get('/system-environment/badFilesTest', function(req, res) {
    requester('http://system-environment:30028/badFilesTest').pipe(res);
});


router.get('/route-tester/you-rang', function(req, res) {
    requester('http://route-tester:30029/you-rang').pipe(res);
});

router.get('/:id', function(req, res) {
    res.redirect('/');
})
module.exports = router;
