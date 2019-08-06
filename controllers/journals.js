const express 		= require('express');
const router		= express.Router();
const User			= require('../models/user');
const Journal  		= require('../models/journal');

// Index page for journals
router.get('/', async (req, res, next) => {
	try {
		const foundJournals = await Journal.find({user: user._id});

	} catch(err){
		next(err)
	}
});

// New Journal Creation
router.get('/new', async (req, res, next) => {
	try{
		const user = await User.find({user: req.session.userId});
		console.log(user);
		res.render('journals/new.ejs', {
			user: user
		})

	} catch(err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const createdJournal = await Journal.create(req.body);
		console.log(createdJournal);
		res.redirect('/journals')

	} catch(err) {
		next(err);
	}
});


module.exports = router;