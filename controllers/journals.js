const express 		= require('express');
const router		= express.Router();
const User			= require('../models/user');
const Journal  		= require('../models/journal');

// Index page for journals
router.get('/', async (req, res, next) => {
	try {
		console.log("The username in journals is: ");
		console.log(req.session.username);
		const userinfo = await User.find({username: req.session.username})
		console.log("The user for journals: ");
		console.log(userinfo[0]);
		const foundJournals = await Journal.find({user: userinfo[0]._id});
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
		console.log("Here is the new journal info:");
		console.log(req.body);
		const createdJournal = await Journal.create(req.body);
		console.log("Created Journal: ");
		console.log(createdJournal);
		res.redirect('/journals')

	} catch(err) {
		next(err);
	}
});

// Show Page For Journal with Entry List

// Edit Page For Journal
router.get('/:id/edit', async (req, res, next) => {
	try{
		console.log("The username is: ");
		console.log(req.session.username);
		const userinfo = await User.find({username: req.session.username})
		console.log("The user: ");
		console.log(userinfo[0]);
		const foundJournal = await Journal.findOne({_id: req.params.id});
		console.log("Found Journal");
		console.log(foundJournal);
		const foundEntries = foundJournals.reduce((accum, journal))
		res.render('journals/edit.ejs', {
			journal: foundJournal,
			title: "Edit Journal",
			user: userinfo
		})
	} catch(err){
		next(err)
	}
})

router.put('/:id', async (req, res, next) => {
	try{
		console.log(req.body);
		const updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body)
		console.log("Updated Journal");
		console.log(updatedJournal);
		res.redirect('/journals/')
	} catch(err){
		next(err);
	}
})

// Delete Journal
router.delete('/:id', async (req, res, next) => {
	try{
	const deletedJournal = await Journal.findByIdAndDelete(req.params.id);
	console.log("Deleted Journal:");
	console.log(deletedJournal);
	res.redirect('/journals')
	} catch(err){
		next(err);
	}
})

//

module.exports = router;