var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function createSecure(req, res, next) {
  var password = req.body.password;
  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

function loginUser(req, res, next) {
  var username = req.body.username
  var password = req.body.password

  User.findOne({ username: username })
    .then(function processUser(foundUser) {
     
      if (!foundUser) {
        res.json({status: 404, data: 'no user found'})
      }
      else if (bcrypt.compareSync(password, foundUser.password)) {
        next()
      }
      else {
        res.json({ status: 401, data: 'invalid password' })
      }
    })
    .catch(function catchError(err) {
      console.log(err)
      return err
    })
}

function authorized(req, res, next) {
  var currentUser = req.session.currentUser
  if (!currentUser || currentUser._id !== req.params.id) {
    res.send({status: 404})
  } else {
    next()
  }
};
module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized
};