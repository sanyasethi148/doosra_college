const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const PORT = 4000;

 
// Database connection
const dbConfig = require("./dbConfig");
dbConfig();
 
// Requiring user model
const User = require("./models/user");

 
app.use(logger("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

const routes = require("./routes/index");
 app.use("/api", routes);

app.listen(PORT, function (error) {
  if (error) {
    console.log("Error in starting the server");
  }
 
  console.log(`Server started successfully on port : ${PORT}`);
});
 