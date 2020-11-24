var subscriber = require('../models/Subscriber');

//DISPLAY list of all countries
exports.main = async (req, res) => {
    res.render('mail',{title: 'Subscribe now!'});
};
