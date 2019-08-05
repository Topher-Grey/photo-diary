const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
	photo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'photo'
	},
	dateCreated: Date,
	journalDate: Date,
	title: String,
	keywords: [String],
	journalEntry: String,
	public: Boolean
})

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;