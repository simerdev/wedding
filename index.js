/**
 * Created by admin1 on 25/10/16.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/first', function (req, res) {
    res.send('Hello World! this is new page');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});