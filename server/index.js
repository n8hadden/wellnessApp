// Declaring variables
const express = require("express");
const cors = require("cors");
const database = require("./utils/database");
const userRoutes = require("./routes/user.routes");
const tagRoutes = require("./routes/tag.routes");
const chatRoutes = require("./routes/chat.routes");

const bodyParser = require("body-parser");
const {IO} = require("./utils/socket.io");

const {createServer} = require("http");

require("dotenv").config();

const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);
const io = new IO(httpServer);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/tag", tagRoutes);

io.use(chatRoutes);

//connect to database
new database().connect();
io.connect();

//convert to http.Listen
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});