const express = require('express');

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('.ejs')
})

app.listen(3000, () => {
  console.log("app is running");
})