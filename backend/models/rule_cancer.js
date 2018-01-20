const mongoose = require('mongoose');

const RuleCancerSchema = new mongoose.Schema({
  regle: String,
  confiance: Number,
  generalite: Number,
  by: String,
  date_maj: { type: Date, default: Date.now },
}, { collection: 'regle_cancer' });

RuleCancerSchema.pre('save', (next) => {
  // change the updated_at field to current date
  this.date_maj = new Date();
  next();
});

const RuleCancer = mongoose.model('RuleCancer', RuleCancerSchema);

module.exports = { RuleCancer };

