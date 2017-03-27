var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

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

module.exports = {
	User: UserModel
};