const express 		= require('express')
const router 		= express.Router();
const User			= require('../models/user');
const bcrypt 		= require('bcryptjs')

router.get('/', (req, res) => {
	req.session.message = "You must be logged in to do that";
	res.render('auth/index.ejs'), {
		message: req.session.message
	}
})