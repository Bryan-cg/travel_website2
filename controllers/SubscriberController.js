const mongoose = require('mongoose');
const Subscriber = mongoose.model('Subscriber');

exports.postPeople = async (req, res) => {
  const subscriber= new Subscriber(req.body);
  await subscriber.save();
  req.flash('success', 'You have filled out the form!');
  res.redirect('/mail');
}