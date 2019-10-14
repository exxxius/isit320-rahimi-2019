var express = require('express');
var router = express.Router();
const requester = require('request');


/* GET Main Server home page. */
router.get('/', function(req, res) {
  'use strict';
  res.render('index', {
    title: 'React Basics Server Rahimi'
  });
});

router.get('/you-rang', function (request, response) {
  const message = {file: 'index.js', program: 'main-server', result: 'success'};
  response.send(message);
});

router.get('/qux/you-rang', function(request, response, next) {
  requester('http://localhost:30027/you-rang').pipe(response);
});

// I added this for system environment test1
router.get('/system-environment/you-rang', function(request, response, next) {
  requester('http://localhost:30028/you-rang').pipe(response);
});
module.exports = router;

