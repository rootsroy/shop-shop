const mongoose = require('mongoose');
const uri = "mongodb+srv://redux_store:redux12345@cluster0.zdhix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
