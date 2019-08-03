const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	entries: Array,
})

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;