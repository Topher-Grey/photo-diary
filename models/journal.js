const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	journalName: String,
	entries: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Entry'
	}],
})

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;