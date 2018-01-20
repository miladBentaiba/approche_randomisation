const mongoose = require('mongoose');

const WeightCancerSchema = new mongoose.Schema({
  weight: Number,
  attrib: String,
}, { collection: 'weight_cancer' });

const WeightCancer = mongoose.model('WeightCancer', WeightCancerSchema);

module.exports = { WeightCancer };

