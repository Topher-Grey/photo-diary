const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	displayName: String,
	firstName: String,
	lastName: String,
	birthday: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;