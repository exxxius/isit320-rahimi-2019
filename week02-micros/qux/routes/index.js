var express = require('express');
var router = express.Router();

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

module.exports = router;
