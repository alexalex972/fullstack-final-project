const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  person_name: {
    type: String
  },
  acc_name: {
    type: String
  },
  user_email: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);