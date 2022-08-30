const mongoose = require("mongoose");
 
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://sanyasethi148:LqKrISE64CoN83I2@cluster0.bcu5z.mongodb.net/movie_server?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
 
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error in connecting to mongoDB ${error}`);
  }
};
 
module.exports = dbConnect;
 