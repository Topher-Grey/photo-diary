const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Journal = require('../models/journal');


// New Entry Creation
router.get('/new', async (req, res, next) => {
	try {
		console.log("The username is: ");
		console.log(req.session.username);
		const userinfo = await User.find({username: req.session.username})
		console.log("The user: ");
		console.log(userinfo);
		const foundJournals = await Journal.find({user: userinfo[0]._id}).populate('entries');
		console.log("Here are the found journals for entries");
		console.log(foundJournals);

	} catch(err){
		next(err)
	}
});


module.exports = router