var express = require('express');
var router = express.Router();

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
        title: 'Route Tester Rahimi'
    });
});

router.get('/you-rang', function(request, response) {
    const rangData = {
        program: 'route-tester',
        file: 'routes/index.js',
        result: 'route-tester you rang',
        server: 'route-tester',
        directory: splitStringOnAnyInstanceOfCharacter(__dirname, '/', 2),
        hostname: process.env.HOSTNAME,
        home: process.env.HOME,
    };
    response.send(rangData);
});

module.exports = router;
