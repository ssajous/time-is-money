'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
