'use strict';

const app = require('express')();
const path = require('path');
const fs = require('fs');

// Sample endpoint that sends the partner's name
app.get('/city/:city', function (req, res) {
    const file = fs.readFileSync(path.join(__dirname, 'data.json'));
    const cityData = JSON.parse(file)[req.params.city];
    res.status(cityData ? 200 : 400).json(cityData || { 'error': true, 'message': 'Unknown city.' });
});

app.get('/cities', function (req, res) {
    const file = fs.readFileSync(path.join(__dirname, 'data.json'));
    const cityData = Object.keys(JSON.parse(file))
    res.status(cityData ? 200 : 400).json(cityData || { 'error': true, 'message': 'Unknown city.' });
});

app.get('/national', function (req, res) {
    const file = fs.readFileSync(path.join(__dirname, 'france.json'));
    const franceData = JSON.parse(file);
    console.log(franceData);
    res.status(franceData ? 200 : 400).json(franceData || { 'error': true, 'message': 'Unknown city.' });
});

// Export our API
module.exports = app;