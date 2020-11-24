const mongoose = require('mongoose');
const Subscriber = mongoose.model('Subscriber');

exports.postPeople = async (req, res) => {
  const subscriber= new Subscriber(req.body);
  await subscriber.save();
  req.flash('success', 'You are succesfully added to the mailing list!');
  res.redirect('/mail');
}