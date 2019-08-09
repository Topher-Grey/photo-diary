const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Journal = require('../models/journal');
const Entry = require('../models/entry');
const Photo = require('../models/photo')


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
		res.render('entries/new.ejs', {
			user: userinfo[0],
			title: "Create New Entry",
			journals: foundJournals
		})

	} catch(err){
		next(err)
	}
});

// Create New Entry
router.post('/', async (req, res, next) => {
	try {
		console.log("Here is the new entry info");
		console.log(req.body);
		const createdEntry = await Entry.create(req.body);
		console.log("Created Entry: ");
		console.log(createdEntry);
		const foundJournal = await Journal.findById({req.body.journalName})
		console.log(foundJournal);
		res.redirect('/journals')
	} catch(err){
		next(err)
	}
});


module.exports = router