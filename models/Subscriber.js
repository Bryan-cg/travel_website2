const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const subscriberSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Please Supply an email address'
       }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);