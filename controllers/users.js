const express		= require('express');
const router		= express.Router();
const User			= require('../models/user');
const Entry			= require('../models/entry');
const bcrypt		= require('bcryptjs');

router.get('/', async (req, res, next) => {
	try {
		const foundEntries = await Entry.find({public: true})
	} catch(err){
		next(err)
	}
});



module.exports = router;