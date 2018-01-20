const mongoose = require('mongoose');

const CaseCancerSchema = new mongoose.Schema({
  problem: {
    BI: Number,
    age: Number,
    shape: Number,
    margin: Number,
    dencity: Number,
  },
  solution: Number,
  validity: {
    coherence: Boolean,
    regles: Boolean,
    stochastique: Number,
    expert: Boolean,
  },
  nb_occurence: Number,
  by: String,
  date_maj: { type: Date, default: Date.now },
}, { collection: 'case_cancer' });

CaseCancerSchema.pre('save', (next) => {
  this.date_maj = new Date();
  next();
});
const CaseCancer = mongoose.model('CaseCancer', CaseCancerSchema);

module.exports = { CaseCancer };

