/* global require, module */

var API = require('claudia-api-builder'),
    api = new API(),
    tankIA = require("./ai/tankAI");

module.exports = api;

api.get('/check/alive', function () {
    return 'OK';
});

api.get('/info', function () {
    return {
        name: 'Jaeger',
        owner: 'Pau Trepat'
    };
});

api.post('/command', function (request) {
    var map = request.body;
    return {
        command: tankIA.move(map)
    };
});