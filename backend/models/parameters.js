const mongoose = require('mongoose');

const ParametersSchema = new mongoose.Schema({
  nb_niveaux: Number,
  taille: Number,
  nb_used_niveaux: Number,
  seuil: Number,
  coherence: Boolean,
  stochastique: Boolean,
  regles: Boolean,
  date_maj: { type: Date, default: Date.now },
  by: String,
}, { collection: 'parameters' });

ParametersSchema.pre('save', (next) => {
  this.date_maj = new Date();
  next();
});
const Parameters = mongoose.model('parameters', ParametersSchema);

module.exports = { Parameters };

