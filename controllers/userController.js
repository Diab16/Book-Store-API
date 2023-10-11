const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateUpdateUser } = require("../models/User");

/**
 * @desc   Update User
 * @route  /api/users/:id
 * @method PUT
 * @access private (only user himself)
 */
const updateUser = asyncHandler(async (req, res) => {
  const { error } = validateUpdateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      },
    },
    { new: true }
  ).select("-password");
  res.status(200).json(updatedUser);
});

/**
 * @desc   Get All User
 * @route  /api/users
 * @method GEt
 * @access private (Only Admin)
 */
const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find().select("-password");
  if (allUsers) {
    res.status(200).json(allUsers);
  } else {
    res.status(404).json({ message: "there is no users" });
  }
});

/**
 * @desc   Get User By Id
 * @route  /api/users/:id
 * @method GEt
 * @access private (Only Admin & User himself)
 */
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

/**
 * @desc   Delete User By Id
 * @route  /api/users/:id
 * @method DELETE
 * @access private (Only Admin & User himself)
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user has been deleted successfully" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

module.exports = { updateUser, getAllUsers, getUserById, deleteUser };
