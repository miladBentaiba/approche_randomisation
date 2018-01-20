const mongoose = require('mongoose');

const CancerWeightSchema = new mongoose.Schema({
  BI: Number,
  age: Number,
  shape: Number,
  margin: Number,
  dencity: Number,
  by: String,
}, { collection: 'cancer_weight' });

const CancerWeight = mongoose.model('CancerWeight', CancerWeightSchema);

module.exports = { CancerWeight };

