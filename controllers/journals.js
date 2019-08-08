const express 		= require('express');
const router		= express.Router();
const User			= require('../models/user');
const Journal  		= require('../models/journal');

// Index page for journals
router.get('/', async (req, res, next) => {
	try {
		console.log("The username is: ");
		console.log(req.session.username);
		const userinfo = await User.find({username: req.session.username})
		console.log("The user: ");
		console.log(userinfo[0]);
		const foundJournals = await Journal.find({user: userinfo._id});
		console.log("\n here is foundJournals");
		console.log(foundJournals);
		res.render('journals/index.ejs', {
			journals: foundJournals,
			title: "Journal Page"
		})

	} catch(err){
		next(err)
	}
});

// New Journal Creation
router.get('/new', async (req, res, next) => {
	try{
		console.log("The username is: ");
		console.log(req.session.username);
		const userinfo = await User.find({username: req.session.username})
		console.log("The user: ");
		console.log(userinfo);
		res.render('journals/new.ejs', {
			user: userinfo[0],
			title: "Create New Journal"
		})

	} catch(err) {
		next(err);
	}
});

// Create New Journal
router.post('/', async (req, res, next) => {
	try {
		const createdJournal = await Journal.create(req.body);
		console.log("Created Journal: ");
		console.log(createdJournal);
		res.redirect('/journals')

	} catch(err) {
		next(err);
	}
});


module.exports = router;