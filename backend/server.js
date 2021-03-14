const express = require("express");
const connectDB = require("./config.js");
const dotenv = require("dotenv");
const { authUser, registerUser } = require("./routes/userRoutes.js");
const { errorHandler } = require("./utils.js");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;
connectDB.connectDB();

app.post("/api/users", registerUser);
app.post("/api/users/login", authUser);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
