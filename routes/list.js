var settings = require('../settings/settings.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(1);
  res.json({a:1});
});

module.exports = router;