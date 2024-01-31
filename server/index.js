// Declaring variables

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Setup PostgreSQL Connection
import { Client } from 'pg';
const client = new Client({
	host: 'host',
	port: 5334,
	database: 'database-name',
	user: 'database-user'
	password: 'secretpasswordooohhhhhhfun'
});
await client.connect();

// Running postgres queries with error handling
try {
   
} catch (err) {
    console.error(err);
} finally {
    await client.end();
}
