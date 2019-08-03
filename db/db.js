const mongoose = require('mongoose');

let connStr

if(process.env.NODE_ENV == "production"){
	connStr = process.env.DB_URL
} else {
	connStr = 'mongodb://localhost/momentescape';
}

mongoose.connect(connStr, { 
	useNewUrlParser: true,
	useCreateIndex: true
	});


mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connStr}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connStr}`)
})

mongoose.connection.on('error', (err) => {
  console.log(`mongoose error: ${err}`)
})