var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CitySchema = new Schema(
    {
        name: { type: String, required: true},
        country: {type: String, required: true},
        continent:{type: String, required: true},
        price:{type: Number, required:true},
        reviews: {type:Number, required:true},
        days: {type: Number, required:true},
        description: {type: String, required: true},
    }
);

//Virtual voor gehele locatie
CitySchema
.virtual('url')
.get(function(){
    return '/cities/' + this._id;
});


//Export model
module.exports = mongoose.model('City', CitySchema);