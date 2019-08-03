const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
	photo_name: String,
	description: String,
	keywords: Array,
	URL: String
})

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;