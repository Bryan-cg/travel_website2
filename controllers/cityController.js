var Country = require('../models/country');
var City = require('../models/city');


//DISPLAY list of all countries
exports.city_list = async (req, res) => {
    res.render('cities_list',{title: 'Cities'});
};
