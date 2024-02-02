// Declaring variables
const express = require("express");
const cors = require("cors");
const database = require("./utils/database");
const userRoutes = require("./routes/user.routes");

require("dotenv").config();
const app = express();

app.use("/user", userRoutes);

//connect to database
new database().connect()

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});