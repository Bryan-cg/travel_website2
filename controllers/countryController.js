var Country = require('../models/country');
var City = require('../models/city');


//DISPLAY list of all countries
exports.country_list = async (req, res) => {
    Country.find({}, 'name capital')
    .exec(function (err, list_countries) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('countries_list', { title: 'Countries', countries_list: list_countries });
    });
};
