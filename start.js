const mongoose = require('mongoose');
require('dotenv').config({ path: 'database.env' });
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🛑 ${err.message}`);
});

require('./models/Subscriber');

const app = require('./app');
  app.set('port', process.env.PORT || 3000);
  const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
})