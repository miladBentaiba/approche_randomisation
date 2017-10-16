var mongoose = require('mongoose'); 
var CaseWeightSchema = new mongoose.Schema({
    BI: Number,
    age: Number,
    shape: Number,
    margin: Number,
    dencity: Number,
    by:String,
    date_maj: { type: Date, default: Date.now },
    date_save: { type: Date, default: Date.now }
});
 // on every save, add the date
CaseWeightSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.date_maj = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.date_maj)
    this.date_maj = currentDate;

  next();
});
 var CaseWeight = mongoose.model('CaseWeight', CaseWeightSchema);
 /** export schema */
 module.exports = {
     CaseWeight: CaseWeight
};


