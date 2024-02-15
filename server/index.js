// Importing required modules
const express = require("express");
const cors = require("cors");
const database = require("./utils/database"); 
const userRoutes = require("./routes/user.routes"); 
const tagRoutes = require("./routes/tag.routes"); 
const chatSocketRoutes = require("./routes/chat.socket.routes"); 
const chatRoutes = require("./routes/chat.routes");
const affermationRoutes = require("./routes/affermations.routes");

const bodyParser = require("body-parser"); 
const {IO} = require("./utils/socket.io");

const {createServer} = require("http"); // Built-in Node.js module for creating HTTP servers
const isNewDay = require("./utils/DateHelper");

require("dotenv").config(); // Loading environment variables from .env file

// Retrieving the port number from environment variables
const port = process.env.PORT;

// Creating an instance of the Express application
const app = express();

// Creating an HTTP server using the Express application
const httpServer = createServer(app);

// Creating a new instance of the IO class to manage socket.io connections
const io = new IO(httpServer);

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({extended: true}));

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing JSON request bodies using bodyParser
app.use(bodyParser.json());

// Mounting user routes to the "/user" endpoint
app.use("/user", userRoutes);
app.use("/tag", tagRoutes);
app.use("/chat", chatRoutes);
app.use("/affermation", affermationRoutes)

// Registering chat routes using the io instance
io.use(chatSocketRoutes);

// Connecting to the database
new database().connect();

// Establishing WebSocket connections using socket.io
io.connect();

// Starting the HTTP server and listening on the specified port
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
