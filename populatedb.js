#! /usr/bin/env node
// JavaScript source code

console.log('Filling db');
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Country = require('./models/country')
var City = require('./models/city')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var countries = []
var cities = []

function countryCreate(name, capital, continent, reviews, description,days,price,cb) {
  countrydetail = {
name:name,
capital:capital,
continent:continent,
reviews:reviews,
description:description,
days:days,
price:price
}
  
  var country = new Country(countrydetail);
       
  country.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New country: ' + country);
    countries.push(country)
    cb(null, country)
  }  );
}

function cityCreate(name, country, continent, reviews, description,days,price,cb) {
  citydetail = {
name:name,
country:country,
continent:continent,
reviews:reviews,
description:description,
days:days,
price:price
}
  
  var city = new City(citydetail);
       
  city.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New city: ' + city);
    cities.push(city)
    cb(null, city)
  }  );
}

function createCountries(cb) {
    async.series([
        function(callback) {
          countryCreate('Italy', 'Rome', 'Europe', 153,'The country of Italy is situated in Southern Europe and is a long peninsula, with the Tyrrhenian Sea to the west and the Ionian Sea to the south and the Adriatic Sea to the east. Italian islands include Sardinia and Sicily.There is a wealth of accommodation in Italy to suit all travellers including budget lodging, travel lodges, bed and breakfast and luxury hotels. Places to visit in Italy include numerous historic sites, museums, landmarks, monuments, breathtaking scenery and quality shopping. The historic city of Rome is over 2,700 years old and is steeped in history. Other important cities in Italy include Bologna - a beautiful city with many points of interest; Florence - the regional capital and full of culture, history, a spectacular medieval cathedral (Duomo) and countless alluring Tuscany villas; Milan - one of the most stylish cities in Italy; Naples - the capital city of Campania, is rich in history and close to Pompeii and Herculaneum; Pisa - home to the world-famous leaning tower; and the historic city of Venice - founded over 1,500 years ago on 117 islands and famous for its canals and bridges and offering a wealth of places of interest for the traveler.Those flying into Italy may like to take advantage of the various car rental agencies at the major airports. When driving in Italy, do remember to always drive of the right-hand side of the road, overtaking on the left. Large cities such as Rome and Milan are often congested in the city centre, and so when driving in busy destinations, it is sensible to drive outside of peak commuting hours where possible.',7,450, callback);
        },
        function(callback) {
          countryCreate('Norway', 'Oslo', 'Europe', 89,'The Kingdom of Norway lies on the far northern side of Europe, next to Finland, the Russian Federation and Sweden, together with the Arctic Ocean and the Norwegian Sea. Norway\'s coastline stretches for some 3,000 km / 1,865 miles between the northerly Svalbard archipelago and the sunny southerly beach resorts, next to crystal-clear turquoise waters. Landscapes along the way include spreading forests, glaciers, icefields and even Arctic tundra.Many rustic and charming fishing villages are commonplace in Norway and often offer tourists traditional Nordic attractions and a host of recreational activities. Hiking trails, mountaineering and seasonal skiing resorts are usually never far away. Visitors staying in Norway are usually surprised and inspired by its immense beauty. Summer is the best time to visit, when the nighttimes in southern Norway remain light, earning the country its nickname of the \'Land of the Midnight Sun\'. However, the winters are dark, cold and icy, when the alpine terrains are often graced by skiers, snowboarders or dog-sleds.Hotels in Norway are known for being pricey, although cheaper accommodation is generally available in the form of hostels, self-catering and campsites. Oslo is the capital city of Norway and has also grown to become a municipality and county in its own right. Highlights in Oslo include the Royal Palace, the National Gallery, the fashionable shopping district of Gronland, and the Viking Ship Museum, where many restored wooden Viking ships are displayed from around Norway, such as the Gokstad and Oseberg ships.',14,900, callback);
        },
        function(callback) {
          countryCreate('Brasil', 'Brasilia', 'South-America', 427,'The biggest of all the countries in South America and also the most densely populated, Brazil (the Federative Republic of Brazil) is known locally in Portuguese as the \'República Federativa do Brasil\'. Standing directly to the north of Argentina, Brazil lies on the north-easterly region of South America and next to the Atlantic Ocean, where it boasts a lengthy coastline of almost 7,500 km / 4,660 miles.Apart from neighbouring Argentina, Brazil is also edged by a large number of further countries, such as Guyana, Suriname and Venezuela (north), Colombia (north-west), Bolivia and Peru (west), Paraguay (south-west) and Uruguay (south). Brazil was first established more than 500 years ago, when the earliest immigrants arrived from Portugal and brought with them their distinctive Portuguese culture and language. Over the years, Brazil has become famous for many different things, including its rich soccer history, its vast Amazon rainforest, and its exciting yearly carnival celebrations in Rio de Janeiro and also within the World Heritage Sites of both Olinda and Salvador. Brasilia serves as the Brazilian capital, while other important cities include Belém, Curitiba, Florianópolis, Fortaleza, Recife and Sao Paulo, which is the biggest city in Brazil and also the most cosmopolitan.',14,1300, callback);
        },
        ],
        // optional callback
        cb);
}

function createCities(cb) {
    async.series([
        function(callback) {
          cityCreate('London', 'England', 'Europe', 704,'London is one of the most diverse cities on the planet. There are great museums, theatre and galleries, as well as some of the best shopping in the world.London has had major immigration of various nationalities. Each community has set up restaurants in different areas. There is Italian, Egyptian, Indian, Greek, Thai and Chinese. Another option are the English pubs, since they often have low-cost meals and serve traditional fayre. Most pubs are full from 7pm. London has a tradition to drink beer after work, this is part of the history of the city. If the weather is good it is common to see people gathered on the sidewalk talking on the door of the place. For several museums in the city you must pay. One of the most convenient options is that you buy passes to visit the fifteen major museums and galleries. One of these is the White Pass Card which lasts from three to seven days and validity begins from the first museum you visit. Why not go and see the British Museum, National Gallery, Tate Gallery, Madame Tussauds and Rock Circus.',3,350, callback);
        },
        function(callback) {
          cityCreate('Buenos Aires', 'Argentina', 'South-America', 71,'The most popular tourist sites are found in the historic core of the city, in the Montserrat and San Telmo neighborhoods. Buenos Aires was conceived around the Plaza de Mayo, the colony\'s administrative center. To the east of the square is the Casa Rosada, the official seat of the executive branch of the government of Argentina. To the north, the Catedral Metropolitana which has stood in the same location since colonial times, and the Banco de la Nación Argentina building, a parcel of land originally owned by Juan de Garay. Other important colonial institutions were Cabildo, to the west, which was renovated during the construction of Avenida de Mayo and Julio A. Roca. To the south is the Congreso de la Nación (National Congress), which currently houses the Academia Nacional de la Historia (National Academy of History). Lastly, to the northwest, is City Hall.Avenida de Mayo links the Casa Rosada with the Argentine National Congress. On this avenue there are several buildings of cultural, architectural, and historical importance, such as Casa de la Cultura, the Palacio Barolo and Café Tortoni. Underneath the avenue, the first subte (metro) line A in South America, opened in 1913. The avenue ends at Plaza del Congreso, which features a number of monuments and sculptures, including one of Auguste Rodin\'s few surviving original casts of "The Thinker".',7,700, callback);
        },
        function(callback) {
          cityCreate('Paris', 'France', 'Europe', 427,'Paris is one of the largest cities of Europe best known as the capital of romance. It is also Frances capital city and lies on the River Seine. Today, as one of the world\'s leading business and cultural centres, its status as one of the world\'s major global cities has been secured. In general prices in restaurants are relatively high. A better idea is to cook in the hostels kitchen. The cheapest option for a good lunch is a traditional baguette stuffed with meats, cheeses, vegetables and different dressings. Another inexpensive and traditional alternative are the extra thin French pancakes called crepes which can be sweet or savoury. The nightlife is active throughout the city. During the warmer months its common to see a lot more people up late walking through the downtown neighbourhoods. Paris is not dangerous, but you must have the same care as in any big city. Paris was one of the world centres for jazz. Often in the summer months free outdoor concerts are performed.',3,400, callback);
        },
        ],
        // optional callback
        cb);
}


async.series([
    createCountries,
    createCities
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log();
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});