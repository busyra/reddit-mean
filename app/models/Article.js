var mongoose = require('mongoose');
//convention for schema to be capitalized
var Schema = mongoose.Schema();

var ArticleSchema = new Schema({
//properties of values
	title: String,
	created_date: Date,
	votes: Number,
	author: String
});

module.exports = mongoose.model('Article', ArticleSchema);
