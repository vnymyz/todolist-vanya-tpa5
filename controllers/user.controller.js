const bcrypt = require('bcrypt');
const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-__v")
      
      res.status(200).json({
        message: "Getting Data",
        data: users
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  getUserByID: async (req, res) => {    
    try {
      const users = await User.findById(req.params.id, "-__v")

      if(!users){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      res.status(200).json({
        message: "You Searched for",
        data: users
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  registerUser: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash

    const user = new User(data)

    user.save()
    res.status(201).json({
      message: "Succes Register!",
    })
  },

  deleteUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v")

      if(!users){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      users.deleteOne()
      res.status(201).json(
        {message: "Data Deleted"
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updateUserByID: async (req, res) => {
    try {
      const users = await User.findById(req.params.id, "-__v")

      Object.assign(users, req.body)
      users.save();
      res.status(201).send({ 
        message : "User updated!",
        data : users })
   
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}