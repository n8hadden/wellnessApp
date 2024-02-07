// Declaring variables
const express = require("express");
const cors = require("cors");
const database = require("./utils/database");
const userRoutes = require("./routes/user.routes");
const tagRoutes = require("./routes/tag.routes");
const bodyParser = require("body-parser");

const {createServer} = require("http");
const {Server} = require("socket.io");

require("dotenv").config();

const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/tag", tagRoutes);

//connect to database
new database().connect();

io.on("connection", (socket) => {

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});