var express = require('express');
var router = express.Router();

/* GET Qux home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'QUX Rahimi - Sunday attempt'
    });
});

router.get('/you-rang', (request, response) => {
    response.send({result: 'success', route: 'you-rang', server: 'qux'});
});

module.exports = router;
