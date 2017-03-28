var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streetart');

var User = require("../models/user");
var Image = require("../models/image")

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

var photo1 = new Image ({
  imageUrl: 'http://az616578.vo.msecnd.net/files/2015/12/18/635860694367891015-143749672_f9DxYSd-2.jpg',
  title: 'this is an art piece',
  description: 'description goes here'
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

photo1.save(function(err){
  if(err) console.log(err);

  console.log('Photo1 created!');
});



