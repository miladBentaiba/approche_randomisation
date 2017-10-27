var mongoose = require('mongoose');
var RuleCancerSchema = new mongoose.Schema({
    regle: String,
    confiance: Number,
    generalite: Number,
    by: String,
    date_maj: { type: Date, default: Date.now },
    date_save: { type: Date, default: Date.now }
}, { collection: 'regle_cancer' });


RuleCancerSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.date_maj = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.date_maj)
        this.date_maj = currentDate;

    next();
});
var RuleCancer = mongoose.model('RuleCancer', RuleCancerSchema);
/** export schema */
module.exports = {
    RuleCancer: RuleCancer
};


