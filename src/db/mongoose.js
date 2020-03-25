const mongoose = require("mongoose");
const db = require("../../keys").MONGODB_URL;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
