const express = require("express");
const connectDB = require("./config.js");
const { authUser, registerUser } = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());

const PORT = 5000;
connectDB.connectDB();

app.post("/api/users", registerUser);
app.post("/api/users/login", authUser);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
