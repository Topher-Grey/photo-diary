const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
	photo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'photo'
	},
	date_created: Date,
	journal_date: Date,
	title: String,
	keywords: Array,
	journal_entry: String,
	public: Boolean
})

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;