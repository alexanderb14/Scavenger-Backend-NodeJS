/**
 * This Schema represents an User entity.
 *
 * @type {*|exports|module.exports}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:                 { type: String, default: '' },
  locationObjectives:   { type: [String], default: '' },
  visualObjectives:     { type: [String], default: '' },
  score:                { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);