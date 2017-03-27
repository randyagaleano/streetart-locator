var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streetart');

var User = require("../models/user");

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

var girlFriend = new User({
  username: 'Allison',
  password: 'Gilmore',
});
var mom = new User({
  username: 'Vonda',
  last_name: 'King',
});

girlFriend.save(function(err){
  if(err) console.log(err);

  console.log('Wife created!')
});

mom.save(function(err){
  if(err) console.log(err);

  console.log('Mom created!');
});

