const express 		= require('express');
const router		= express.Router();
const User			= require('../models/user')

// Index page for journals
router.get('/', async (req, res, next) => {
	try {
		const foundJournals = await Journal.find({});

	} catch(err){
		next(err)
	}
});

module.exports = router;