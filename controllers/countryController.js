var Country = require('../models/country');
var City = require('../models/city');


//DISPLAY list of all countries
exports.country_list = async (req, res) => {
    res.render('countries_list',{title: 'Countries'});
};
