// Declaring variables

const express = require("express");
const cors = require("cors");
const database = require("./utils/database");

require("dotenv").config();

//connect to database
new database().connect()

// Running postgres queries with error handling
