const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');

// New Photo Creation
router.get('/new', async (req, res, next) => {
	try {
		console.log("Uploading photo data");
		res.render('photos/new.ejs', {
			title: "Create New Photo"
		})
	} catch(err){
		next(err)
	}
});


module.exports = router;