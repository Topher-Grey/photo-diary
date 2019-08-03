const express 			= require('express');
const app 				= express()
const body_parser 		= require('body-parser');
const method_override 	= require('method-override');
const session 			= require('express-session');
const PORT 				= process.env.PORT || 3000

require('./db/db')

app.use(express.static('public'))
app.use(body_parser.urlencoded({extended: false}))


 


app.get('/', (req, res) => {
		console.log("This is the req.body", req.body, 
			"\n*****************************************");
		res.render('index.ejs')
})

app.listen(PORT, () => {
  const date = new Date()
  console.log(date.toLocaleString() + ": server running on port " + PORT + 
  	"************************");
  console.dir(process.env)
})