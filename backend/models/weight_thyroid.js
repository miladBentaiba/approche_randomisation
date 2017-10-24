var mongoose = require('mongoose');
var WeightThyroidSchema = new mongoose.Schema({
    weight: Number,
    attrib: String
}, { collection: 'weight_thyroid' });
// on every save, add the date
WeightThyroidSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    next();
});
var WeightThyroid = mongoose.model('WeightThyroid', WeightThyroidSchema);
/** export schema */
module.exports = {
    WeightThyroid: WeightThyroid
};


