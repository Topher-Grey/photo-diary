const express = require('express');
const body_parser = require('body-parser');


const app = express()

app.use(express.static('public'))



app.get('/', (req, res) => {
		res.render('index.ejs')
})

app.listen(3000, () => {
  console.log("app is running");
})