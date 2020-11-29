var Country = require('../models/country');
var City = require('../models/city');


//DISPLAY list of all countries
exports.city_list = async (req, res) => {
    City.find({}, 'name country')
    .exec(function (err, list_cities) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('cities_list', { title: 'Cities', cities_list: list_cities});
    });
};
