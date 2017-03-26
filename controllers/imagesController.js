//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var Images = require("../models/images.js");

router.get('/', function(req, res) {
	res.render('index.hbs', {
		image: Images
	})
});


router.get('/new', function (req, res) {
	res.render('new');
});

module.exports = router;