var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CountrySchema= new Schema(
  {
    name: {type: String, required: true},
    capital: {type: String, required:true},
    continent: {type: String, required:true},
    reviews: {type: Number, required:true},
    description: {type: String, required:true},
    days: {type: Number,required: true},
    price:{type: Number,required: true},
  }
);

CountrySchema
.virtual('url')
.get(function(){
    return '/countries/' + this._id;
});


//Export model
module.exports = mongoose.model('Country', CountrySchema);