// Declaring variables

const express = require("express");
const cors = require("cors");
const database = require("./utils/database");

require("dotenv").config();

//connect to database
new database().connect()

// Setup PostgreSQL Connection
import { Client } from 'pg';
const client = new Client({
	host: 'host',
	port: 5334,
	database: 'database-name',
	user: 'database-user',
	password: 'secretpasswordooohhhhhhfun'
});
await client.connect();

// Running postgres queries with error handling
