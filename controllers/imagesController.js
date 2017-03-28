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

router.get('/:id', function showAction(req, res){
  Image.findById(req.params.id)
    .exec(function(err, image) {
      if (err) console.log(err);
      console.log(image);
      res.render('photos/show', {
        image: image
      });
    });
});

router.get('/:id/edit', function editAction(req, res) {
  Image.findById(req.params.id)
    .exec(function(err, image) {
      if (err) console.log(err);
      console.log(image);
      res.render('photos/edit', {
        image: image
      });
    });
});


router.patch('/:id', function updateAction(req, res) {
   Image.findByIdAndUpdate(req.params.id, {
     title: req.body.title,
     description: req.body.description }, 
    {new: true})
       .exec(function(err, image) {
           if (err) { return console.log(err); }
           console.log(image);

           // Make this a redirect -- all non-GETs do redirects
           res.redirect(`/streetart/${req.params.id}`);



           // res.redirect('streetart/' + req.params.id)
           // res.redirect('streetart/' + image._id)
           // res.redirect(`streetart/${req.params.id}`)
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








module.exports = router;