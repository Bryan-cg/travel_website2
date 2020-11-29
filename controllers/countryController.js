var Country = require('../models/country');
var City = require('../models/city');
var async = require('async');


//DISPLAY list of all countries
exports.country_list = async (req, res) => {
    Country.find({}, 'name capital')
    .exec(function (err, list_countries) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('countries_list', { title: 'Countries', countries_list: list_countries });
    });
};

exports.country_detail = function(req, res, next) {
  async.parallel({
      country: function(callback) {

          Country.findById(req.params.id)
            .exec(callback);
      },
  }, function(err, results) {
      if (err) { return next(err); }
      if (results.country==null) { // No results.
          var err = new Error('Country not found');
          err.status = 404;
          return next(err);
      }
      // Successful, so render.
      res.render('country_detail', { title: results.country.name, country: results.country} );
  });

};
