var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

var ImageSchema = new Schema ({
	imageUrl: String,
	title: String,
	description: String
	
});

var UserSchema = new Schema ({
	username: String,
	password: String
});

UserSchema.pre('save', function(next) {
	now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) { this.created_at = now; }
	next();
});

var UserModel = mongoose.model('User', UserSchema);
var ImageModel = mongoose.model('Image', ImageSchema);

module.exports = {
	User: UserModel,
	Image: ImageModel
};