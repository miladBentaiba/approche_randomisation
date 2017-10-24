var mongoose = require('mongoose');
var WeightCancerSchema = new mongoose.Schema({
    weight: Number,
    attrib: String
}, { collection: 'weight_cancer' });
// on every save, add the date
WeightCancerSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var WeightCancer = mongoose.model('WeightCancer', WeightCancerSchema);
/** export schema */
module.exports = {
    WeightCancer: WeightCancer
};


