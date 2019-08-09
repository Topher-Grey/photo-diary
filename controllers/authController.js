const express 		= require('express');
const router 		= express.Router();
const User			= require('../models/user');
const bcrypt 		= require('bcryptjs');

router.get('/', (req, res) => {
	req.session.message = "You must be logged in to do that"
	res.render('auth/index.ejs', {
		message: req.session.message,
		title: "Login Page"

	})
})

router.get('/register', (req, res) => {
	res.render('auth/register.ejs', {
		title: "Registration Page"
	})
})

router.post('/register', async (req, res, next) => {

  	const password = req.body.password;
  	const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  	req.body.password = hashedPassword;

  	try {
      	const createdUser = await User.create(req.body);
      	console.log('*******************************\nCreated User: ');
      	console.log(createdUser, ' created user');

      	// set info on the session
        req.session.loggedIn = true;
        req.session.id = createdUser._id;
        req.session.username = createdUser.username;


        res.redirect('/');
  	} catch (err){
    	res.send(err)
  }
})


router.post('/login', async (req, res, next) => {

  const user = await User.findOne({username: req.body.username})

  if(!user) {
    console.log("User does not exist");
    req.session.message = "invalid username or password"
    res.redirect('/auth')
  }
  else {
    if(bcrypt.compareSync(req.body.password, user.password) == true){
      req.session.loggedIn = true
      req.session.username = user.username
      console.log(req.session);
      console.log("password accepted");
      res.redirect('/')
    }
    else {
      console.log("bad password");
      req.session.message = "invalid username or password"
      res.redirect('/auth')
    }
  }
});

module.exports = router;