var express = require('express');
var router = express.Router();

/* GET System Environment home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Environment Rahimi'
    });
});

router.get('/you-rang', function (request, response) {
    const rangData = {
        program: "system-environment",
        file: "routes/index.js",
        result: "system-environment you rang",
        server: "system-environment",
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME
    };
    response.send(rangData);
});

module.exports = router;
