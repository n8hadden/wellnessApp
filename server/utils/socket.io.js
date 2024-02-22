// Importing the Server class from the socket.io module
const { Server } = require("socket.io");

// Definition of the IO class
class IO {
    // Initializing properties
    endpoints = [];
    io = null;

    // Constructor function that takes an HTTP server as an argument
    constructor(httpServer) {
        // Creating a new instance of the Server class and assigning it to the io property
        this.io = new Server(httpServer);
    }

    // Method to handle connection events
    connect() {
        // Event listener for when a client connects
        this.io.on("connection", (socket) => {
            // Attaching event listeners for each registered endpoint
            console.log("Socket Connected");
            this.endpoints.forEach(endpoint => {
                // When the endpoint event is received, execute the associated callback function
                socket.on(endpoint.endpoint, (data) => endpoint.callback(this.io, socket, data))
            })
        });
    }

    // Method to register routes from a router
    use(router) {
        // Extracting routes from the router
        const routes = router.routes;
        // Adding each route to the endpoints array
        routes.forEach(route => {
            this.endpoints.push(route)
        });
    }
}

// Definition of the Router class
class Router {
    // Initializing routes array
    routes = []

    // Method to register an event listener for a specific endpoint
    On(endpoint, callback) {
        // Pushing the endpoint and callback function to the routes array
        this.routes.push({
            endpoint,
            callback
        })
    }
}

// Exporting the IO and Router classes to make them accessible to other modules
module.exports = {
    IO,
    Router
}
