//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var photos = require("../models/images.js");
var Image = require("../models/imageModel");	

router.get('/', function(req, res) {
	res.render('index.hbs', {
		// image is what we use to refer to the photos
		image: photos
	})
});



router.get('/new', function(req, res) {
	res.render('photos/new');
});

// router.post('/', function(req, res) {
// 	photos.push({
// 		name: photos.name,
// 		img: photos.img,
// 		id: photos.id,
// 		// imageUrl: req.body.imageUrl,
// 		// title: req.body.title,
// 		// description: req.body.description
// 	});
// 	res.redirect('/streetart')
// });

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
 	console.log(imageUrl);
});


// router.get('/:id', function (req, res) {
// 	var image = photos[req.params.id];
// 	res.render('photos/show', {
// 		name: image.name,
// 		img: image.img,
// 		id: image.id,
// 	});
// });


router.get('/:id', function (req, res) {
	var image = photos[req.params.id];
	res.render('photos/show', {
		title: photos.title,
		imageUrl: photos.imageUrl,
		description: photos.description,

	});
});



module.exports = router;