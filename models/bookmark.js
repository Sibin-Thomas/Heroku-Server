const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
	bookmarkUrl : {type : String, required: true, unique: true},
	bookmarkName : {type : String},
	username : {type : String}
});

const Bookmark = mongoose.model('Bookmark',bookmarkSchema);
module.exports = Bookmark;