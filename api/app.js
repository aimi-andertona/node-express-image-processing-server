var express = require ('express');
var path = require('path');
const app = require('./app');
const pathToIndex = path.resolve(__dirname,'../client/index.html');

app.use('/*', (req, res,) => {
    sendFile(pathToIndex);
});


module.exprts = app.listen(3000, () => {
    console.log(`App running on port: ${3000}`);
  });