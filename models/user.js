const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	display_name: String,
	first_name: String,
	last_name: String,
	birthday: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;