var express = require('express');
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

app.listen(process.env.PORT || 5000, () => console.log('all is Ok'));