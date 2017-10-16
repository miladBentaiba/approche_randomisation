var mongoose = require('mongoose');
var CaseCancerSchema = new mongoose.Schema({
    problem:{
        BI: Number,
        age: Number,
        shape: Number,
        margin: Number,
        dencity: Number,
    },
    solution:Number,
    validity:{
        coherence:Boolean,
        stochastique:Number,
        regles:Boolean,
        expert:Boolean
    },

    nb_occurence:Number,
    by:String,
    date_maj: { type: Date, default: Date.now },
    date_save: { type: Date, default: Date.now }
});
 // on every save, add the date
CaseCancerSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.date_maj = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.date_maj)
    this.date_maj = currentDate;

  next();
});
 var CaseCancer = mongoose.model('CaseCancer', CaseCancerSchema);
 /** export schema */
 module.exports = {
     CaseCancer: CaseCancer
};


