  const express 			= require('express');
const app 				= express()
const bodyParser 		= require('body-parser');
const methodOverride 	= require('method-override');
const session 			= require('express-session');
const PORT 				= process.env.PORT || 3000

require('./db/db')

const authController 	= require('./controllers/authController')
const userController 	= require('./controllers/users')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))


app.use('/auth', authController)
app.use('/user', userController)

 


app.get('/', (req, res) => {
		// console.log("This is the req.body", req.body, 
			// "\n*****************************************");
		if((req.session.loggedIn === true)) {
			res.render('index.ejs');
		} else {
			req.session.message = "You must be logged in to do that"
			res.redirect('/auth')
		}
		
})

app.listen(PORT, () => {
  const date = new Date()
  console.log(date.toLocaleString() + ": server running on port " + PORT + 
  	"************************");
  console.dir(process.env)
})