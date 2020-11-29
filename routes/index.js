var express = require('express');
var router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const subscriberController = require('../controllers/SubscriberController');
const countryController = require('../controllers/countryController');
const cityController = require('../controllers/cityController');
const mailController = require('../controllers/mailController');
const aboutController = require('../controllers/AboutController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Discover the world' });
});

router.get('/countries', countryController.country_list);
router.get('/cities', cityController.city_list);
router.get('/mail', mailController.main);
router.get('/about', aboutController.main);
router.get('/countries/:id', countryController.country_detail);

router.post('/mail', catchErrors(subscriberController.postPeople));

module.exports = router;
