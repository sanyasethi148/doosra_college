const mongoose = require("mongoose");
 
const movieSchema = new mongoose.Schema(
  {
    movieName: {
        type: String,
        required: true,
      },

    theatre: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    movieimg: {
      type: String,
      required: true,
    },

   
  },
  {
    timestamps: true,
  }
);
 
const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
 