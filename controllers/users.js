//require express, router, User Schema, List Schema, authHelpers
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

router.get('/signup', function(req, res){
  res.render('users/signup.hbs');
});






module.exports = router;