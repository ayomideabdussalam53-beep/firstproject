const usermodel = require("../model/usermodel.js");
const bcrypt = require("bcrypt");

// Create a new user(post)
//read user(get ): general get, and single get
//update user
//delete user


//CREATE USER
 const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    const user = await userModel.create({ name, email, password: hashedPassword }); 
    
    res.status(201).json({ message: 'User created successfully',
        data : user
     });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//general get

 const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: "All users retrieved successfully",
      data: users
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//single get
 const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingle = await userModel.findById(id);
    if (!getSingle) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({
      message: "User retrieved successfully",
      data: getSingle
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update user
 const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {name, email, password} = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, { name, email, password }, 
        { new: true });
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }};


  //DELETE USER
   const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser = await userModel.findByIdAndDelete(id);
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({
        message: "User deleted successfully",
        data: deleteUser
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  module.exports = { createUser, getAllUsers, getSingleUser, updateUser, deleteUser , loginUser}; 