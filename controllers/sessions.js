var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

//LOGIN
// router.post('/login',  , function(req, res) {
	// User.findOne({ username: req.body.username })
 //  res.redirect('/users/' + user.id + '/streetart')
  // res.redirect('/streetart');
// });



router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect('/streetart');
});

router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/users');
  });
});

module.exports = router;
