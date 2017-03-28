//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
// var photos = require("../models/images.js");
var Image = require("../models/image.js");	

// router.get('/', function(req, res) {
// 	res.render('index.hbs', {
// 		// image is what we use to refer to the photos
// 		images: images
// 	})
// });

router.get('/', function(req, res){
  Image.find({})
    .exec(function(err, images){
      if (err) { console.log(err); }
      console.log(images);
      res.render('index', {
        images: images
      });
    });
});

// step 1.) Use mongoose call to grab all Images in images collection using image model hint: Image.find
// step 2.) Iterate through every Image 


router.get('/new', function(req, res) {
	res.render('photos/new');
});


router.post('/', function createUser(req, res) {
	var image = new Image({
		imageUrl: req.body.imageUrl,
		title: req.body.title,
		description: req.body.description
	});
		image.save(function(err, user){
			if (err) { return console.log(err); }
			console.log(image.title);
			// console.log(req.session.currentUser);
		res.redirect('/streetart');
  });
 	console.log(req.body.imageUrl);
});


router.get('/:id', function(req, res){
  Image.findById(req.params.id)
  .exec(function(err, images) {
    if (err) console.log(err);
    console.log(images);
    res.render('photos/show', {
      images: images
    });
  });
});





module.exports = router;