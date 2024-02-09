const {Server} = require("socket.io");

class IO{
    endpoints = [];
    io = null;

    constructor(httpServer){
        this.io = new Server(httpServer);
    }

    connect(){
        this.io.on("connection", (socket) => {
            this.endpoints.forEach(x => {
                socket.on(x.endpoint, (data) => x.callback(this.io, socket))
            })
        });
    }

    use(router){
        const routes = router.routes;
        routes.forEach(route => {
            this.endpoints.push(route)
        });
    }
}

class Router{
    routes = []
    
    On(endpoint, callback){
        this.routes.push({
            endpoint, callback
        })
    }
}

module.exports = {
    IO, Router
}