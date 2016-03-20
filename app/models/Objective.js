/**
 * This Schema represents an Objetive entity.
 *
 * @type {*|exports|module.exports}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectiveSchema = new Schema({
  name:                 { type: String, default: '' },
  info:                 { type: String, default: '' },
  latitude:             { type: String, default: '' },
  longitude:            { type: String, default: '' },
  activity:             { type: String, default: '' },
  date:                 { type: Date, default: null },
  image:                { type: String, default: '' },
  thumbnail:            { type: String, default: '' },
  owner:                { type: String, default: '' },
  otherConfirmedUsers:  { type: [String], default: '' }
});

module.exports = mongoose.model('Objective', ObjectiveSchema);