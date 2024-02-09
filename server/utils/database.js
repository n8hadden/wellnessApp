// Importing the Client class from the pg module
const { Client } = require("pg");

// Database class definition
class Database {
    // Static property to store the client instance
    static client = null;

    // Method to establish a connection to the database
    connect = () => {
        // Creating a new client instance and setting it to the static client property
        Database.client = new Client({
            host: process.env.DBHOST,
            port: process.env.DBPORT,
            database: process.env.DBNAME,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD
        });

        // Connecting the client to the database
        Database.client.connect();
    }

    // Static method to execute a query that doesn't return data (e.g., INSERT, UPDATE, DELETE)
    static setData = async (query) => {
        // Using client.query() to execute the query and catching any errors
        await Database.client.query(query).catch(err => {
            console.log(err);
        });
    }

    // Static method to execute a query that returns data (e.g., SELECT)
    static getData = async (query) => {
        try {
            // Executing the query and returning the rows fetched from the result
            return (await Database.client.query(query)).rows;
        } catch (err) {
            // Handling errors by logging them and returning an empty array
            console.log(err);
            return [];
        }
    }
}

// Exporting the Database class to make it available for use in other modules
module.exports = Database;
