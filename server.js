var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');
var port_number = 8891;

server.listen(port_number, function(){
    console.log("Listening on " + port_number)
});

io.on('connection', function (socket) {

    console.log("new client from LaravelFirst connected");
    var redisClient = redis.createClient();

    redisClient.subscribe('add_factory');
    redisClient.subscribe('add_factory_nodes');
    redisClient.subscribe('edit_factory');
    redisClient.subscribe('delete_factory');

    redisClient.on("message", function(channel, message) {
        console.log("new message in queue "+ message + " channel");
        socket.emit(channel, message);
    });

    socket.on('disconnect', function() {
        redisClient.quit();
    });
});