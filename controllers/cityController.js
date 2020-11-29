var Country = require('../models/country');
var City = require('../models/city');
var async = require('async');


//DISPLAY list of all countries
exports.city_list = async (req, res) => {
    City.find({}, 'name country')
    .exec(function (err, list_cities) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('cities_list', { title: 'Cities', cities_list: list_cities});
    });
};

exports.city_detail = function(req, res, next) {
    async.parallel({
        city: function(callback) {
  
            City.findById(req.params.id)
              .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.city==null) { // No results.
            var err = new Error('City not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('city_detail', { title: results.city.name, city: results.city} );
    });
  
  };