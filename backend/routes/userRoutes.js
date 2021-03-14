const { User } = require("../models/UserModel.js");
const asyncHandler = require("express-async-handler");

// @desc Authenticate the user
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        cnicNumber,
        dateOfBirth,
        gender,
        email,
        password,
    } = req.body;

    // check if a user already exists with the same email
    const userExists = await User.findOne({ email });

    // return an error if user already exists
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        firstName,
        lastName,
        phoneNumber,
        cnicNumber,
        dateOfBirth,
        gender,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User data");
    }
});

module.exports = {
    authUser,
    registerUser,
};
