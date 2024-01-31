const {Client} = require("pg");

class Database{

    static client = null;

    connect = () => {
        //set static client var to the instance of the client
        Database.client = new Client({
            host: process.env.DBHOST,
            port: process.env.DBPORT,
            database: process.env.DBNAME,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD
        });

        //connect the client
        Database.client.connect();
    }
}

module.exports = Database;