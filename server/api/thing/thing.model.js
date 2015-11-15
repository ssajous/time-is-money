'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
