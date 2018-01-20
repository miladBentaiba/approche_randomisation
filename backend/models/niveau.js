const mongoose = require('mongoose');

const Cancer = mongoose.model('CaseCancer');
const NiveauSchema = new mongoose.Schema({
  rang: Number,
  debut: Number,
  fin: Number,
  case_cancer: [Cancer.schema],
}, { collection: 'niveau' });

const Niveau = mongoose.model('Niveau', NiveauSchema);

module.exports = { Niveau };
