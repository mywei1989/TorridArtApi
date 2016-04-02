var express = require('express');

var app = express();

app.enable('strict routing');

app.use('*',function(req,res,next){
  res.set({
    'Content-Type':'application/json;charset=UTF-8'
  });

  res.header('Access-Control-Allow-Headers', 'Content-Type,api_key,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,PUT,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



var router_list = require('./routes/list');

app.use('/', router_list);

module.exports = app;