var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	title: String,
	venue: String,
	user: String,
	timestamp: {type: Date, default: Date.now}
});

mongoose.model('Event', EventSchema);