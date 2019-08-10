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
		const foundJournal = await Journal.findById(req.body.journalName)
		console.log(foundJournal);
		foundJournal.entries.push(createdEntry);
		const savedJournal = await foundJournal.save();
		res.redirect('/journals')
	} catch(err){
		next(err)
	}
});

// Entry Show Page
router.get('/:id', async (req, res, next) => {
	try {
		const foundEntry = await Entry.findById(req.params.id);
		console.log("Found Entry: ", foundEntry);
		res.render('entries/show.ejs', {
			entry: foundEntry,
			title: "Entry Page"
		})
	} catch(err){
		next(err)
	}
});

// Edit Entry
router.get('/:id/edit', async (req, res, next) => {
	try {
		const foundEntry = await Entry.findById(req.params.id);
		console.log("Found Entry: ", foundEntry);
		res.render('entries/edit.ejs', {
			entry: foundEntry,
			title: "Entry Edit Page"
		})
	} catch(err){
		next(err)
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		console.log(req.body);
		const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body)
		console.log("Updated Entry: ", updatedEntry);
		res.redirect('/journals/')
	} catch(err){
		next(err)
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedEntry = await Entry.findByIdAndDelete(req.params.id)
		console.log("Deleted Entry: ", deletedEntry);
		res.redirect('/journals')
	} catch(err){
		next(err)
	}
});


module.exports = router