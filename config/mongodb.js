const mongodb = require("mongoose");
//kết nối đến MongoDB
mongodb
  .connect("mongodb://127.0.0.1:27017/Lab89")
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongodb;
