const { User } = require("../models/UserModel.js");
const asyncHandler = require("express-async-handler");

// @desc Authenticate the user & get token
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
    console.log(req.body, "123");
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

    const userExists = await User.findOne({ email });

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
            phoneNumber: user.phoneNumber,
            cnicNumber: user.cnicNumber,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
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
