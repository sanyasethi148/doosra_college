const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Movie = require("../models/movie");
const bcrypt = require("bcryptjs");
const authFile = require("../authentication");

//adding a new movie
router.post("/addmovie", async (req, res) => {
  try {
    const newMovie = await Movie.create({
      movieName: req.body.movieName,
      theatre: req.body.theatre,
      language: req.body.language,
      genre: req.body.genre,
      movieimg: req.body.movieimg

    });
    return res.send("Movie added");
  } catch (error) {
    console.log(error);
  }
});

//update a movie
router.post("/MovieUpdate/:movieid" , async (req,res) =>{
  try {
    const Movieid = req.params.movieid
    const MovieUpdate = await Movie.findByIdAndUpdate(Movieid,{
      movieimg : req.body.movieimg
    });
    return res.send(MovieUpdate);
  } catch (error) {
    console.log(error);
  }
})


 //delete movie by id
 router.delete("/deletemoviebyid/:movieid", async (req, res) => {
    try {
      const movieid = req.params.movieid;
      await Movie.findByIdAndDelete(movieid);

      return res.send("movie deleted successfully");
    } catch (error) {
      console.log(error);
    }
  });


//book a movie
router.post("/bookmovie/:movieid", authFile.authenticationChecker, async (res, req) => {
  try {
    const userid = req.body.userid;
    const movieid = req.body.movieid;

    const user = await user.findByIdAndUpdate(
      userid,
      {
        $push: { movieBooked: movieid }
      },
      {
        new: true,
        runvalidators: true,
      })

    return res.send(user);
  } catch (error) {
    console.log(error);
  }
});


//finding movie by id 
router.get("/findmoviebyid", async (req, res) => {
  try {
    const movieid = req.body.movieid;
    const movie = await Movie.findById(movieid);

    return res.send(movie);
  } catch (error) {
    console.log(error);
  }
});


//finding all movies
router.get("/allmovies", authFile.authenticationChecker, async (req, res) => {
  try {
    const data = await Movie.find({});
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});


//Passing params for movie
router.get("/findbyid/:movieid", async (req, res) => {
  try {
    const movieid = req.params.movieid;
    const movie = await Movie.findById(movieid);

    return res.send(movie);
  } catch (error) {
    console.log(error);
  }
});


// register for new user
router.post("/register", async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      useremail: req.body.useremail,
      phone: req.body.phone,
      password: hash,
      confirmpassword: hash,
    });

    return res.send("User created");
  } catch (error) {
    console.log(error);
  }
});


//signin for user
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ useremail: req.body.useremail });

    if (!user) {
      return res.send("User not found");
    }

    const check = bcrypt.compareSync(req.body.password, user.password);

    if (!check) {
      return res.status(500).send("User password is not correct");
    }

    const token = authFile.genToken(user._id);
    return res.send({ token: token });
  } catch (error) {
    console.log(error);
  }
});


// get all users
router.get("/fetchusers", authFile.authenticationChecker, async (req, res) => {
  try {
    const users = await User.find({});

    return res.send(users);
  } catch (error) {
    console.log(error);
  }
});


//delete user
router.delete("/deleteuser", async (req, res) => {
  try {
    const id = req.body.id;
    await User.findByIdAndDelete(id);

    return res.send("User deleted successfully");
  } catch (error) {
    console.log(error);
  }
})


//update user
router.post("/updateuser", async (req, res) => {
  try {
    const id = req.body.id;

    const updatedUser = await User.findByIdAndUpdate(id, {
      password: req.body.password,
    });

    await updatedUser.save();

    const ret = await User.findById(id);

    return res.send(" user updated succesfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;