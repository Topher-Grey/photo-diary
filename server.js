const express 			= require('express');
const app 				= express()
const bodyParser 		= require('body-parser');
const methodOverride 	= require('method-override');
const session 			= require('express-session');
const PORT 				= process.env.PORT || 3000

require('./db/db')

const authController 	= require('./controllers/authController')
const userController 	= require('./controllers/users')
const journalController = require('./controllers/journals')
const entryController 	= require('./controllers/entries')
const photoController	= require('./controllers/photos')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

app.use(session({
	secret: 'secretmessage', //process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	loggedIn: false
}))


app.use('/auth', authController)
app.use('/user', userController)
app.use('/journals', journalController)
app.use('/entries', entryController)
app.use('/photos', photoController)

 


app.get('/', (req, res) => {
		// console.log("This is the req.body", req.body, 
			// "\n*****************************************");
		if((req.session.loggedIn === true)) {
			console.log("Here is the user");
			
			res.render('index.ejs', {
				title: 'Moment Escape'
			});
		} else {
			res.redirect('/auth')
		}
		
})

app.listen(PORT, () => {
  const date = new Date()
  console.log(date.toLocaleString() + ": server running on port " + PORT + 
  	"******************************************************************");
  //console.dir(process.env)
})