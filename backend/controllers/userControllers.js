const asyncHandler = require('express-async-handler'); // Import the express-async-handler middleware
const generateToken = require('../config/generateToken'); // Import the generateToken function

const registerUser = asyncHandler(async (req, res) => { // Define the registerUser controller function
    const { name, email, password, pic } = req.body; // Destructure name, email, password, and pic from the request body

    // Validate the input data
    if (!name || !email || !password) {
        res.status(400); // Set response status to 400 Bad Request
        throw new Error("Please enter all required fields"); // Throw an error if required fields are missing
    }

    // Check if the user already exists in the database
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400); // Set response status to 400 Bad Request
        throw new Error("User already exists"); // Throw an error if the user already exists
    }

    // Create a new user
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    // If user creation is successful, send a response with user details and a JWT token
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id), // Generate a JWT token using the generateToken function
        });
    } else {
        res.status(400); // Set response status to 400 Bad Request
        throw new Error("Failed to create the User"); // Throw an error if user creation fails
    }
});

module.exports = { registerUser }; // Export the registerUser controller function
