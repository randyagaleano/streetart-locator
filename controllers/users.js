//require express, router, User Schema, List Schema, authHelpers
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var authHelpers = require('../helpers/auth.js');


// var List = require('../models/list.js');X
// var authHelpers = require('../helpers/auth.js');

router.get('/signup', function newUser(req, res){
  res.render('users/signup.hbs');
});



router.post('/', authHelpers.createSecure, function(req, res){
	var user = new User({
		username: req.body.username,
		password: res.hashedPassword
		// password_digest: req.body.password
	});
		user.save(function(err, user){
			if (err) { return console.log(err); }
			console.log(user);
			// console.log(req.session.currentUser);
		res.redirect('users/login');
  });
 	console.log('sup');
});


router.get('/login', function(req, res){
  res.render('users/login.hbs');
});










module.exports = router;