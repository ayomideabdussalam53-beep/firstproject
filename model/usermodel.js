const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {type: String,required: true,unique: true
  },
  password: {
    type: String,
    required: true
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
//module.exports = mongoose.model('User', userSchema);