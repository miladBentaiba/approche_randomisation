var mongoose = require('mongoose');
var Cancer = mongoose.model('CaseCancer');
var Thyroid = mongoose.model('CaseThyroid');
var NiveauSchema = new mongoose.Schema({
    rang:Number,
    debut:Number,
    fin: Number,
    case_cancer: [Cancer.schema],
    case_thyroid: [Thyroid.schema]
}, { collection: 'niveau' });
// on every save, add the date
NiveauSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var Niveau = mongoose.model('Niveau', NiveauSchema);
/** export schema */
module.exports = {
    Niveau: Niveau
};