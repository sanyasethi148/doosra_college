const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },
    
    useremail: {
        type: String,
        required: true,
      },

      phone: {
        type: Number,
        required: true,
      },

      password: {
        type: String,
        required: true,
      },
      
      confirmpassword: {
        type: String,
        required: true,
      },

      movieBooked:[ {
        type: String,
        required: true,
      }]
    },
  {
    timestamps: true,
  }
);
 
const User = mongoose.model("User", userSchema);
module.exports = User;
 