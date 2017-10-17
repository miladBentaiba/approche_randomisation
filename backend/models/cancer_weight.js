var mongoose = require('mongoose'); 
var CancerWeightSchema = new mongoose.Schema({
    BI: Number,
    age: Number,
    shape: Number,
    margin: Number,
    dencity: Number,
    by:String,
}, { collection: 'cancer_weight' });
 // on every save, add the date
CancerWeightSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  next();
});
 var CancerWeight = mongoose.model('CancerWeight', CancerWeightSchema);
 /** export schema */
 module.exports = {
     CancerWeight: CancerWeight
};


