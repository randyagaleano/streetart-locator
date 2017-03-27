//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var photos = require("../models/images.js");

router.get('/', function(req, res) {
	res.render('index.hbs', {
		// image is what we use to refer to the photos
		image: photos
	})
});


router.get('/new', function(req, res) {
	res.render('photos/new');
});

router.post('/', function(req, res) {
	photos.push({
		name: image.name,
		img: image.img,
		id: image.id,
	});
	res.redirect('/streetart')
});

router.get('/:id', function (req, res) {
	var image = photos[req.params.id];
	res.render('photos/show', {
		name: image.name,
		img: image.img,
		id: image.id,
	});
});

module.exports = router;