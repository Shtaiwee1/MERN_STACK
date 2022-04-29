const express = require('express');
const cors = require('cors');
const app = express();

require('../server/config/mongoose.config'); // This is new

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

require('../server/routes/person.routes')(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

const io = require('socket.io')(server, { cors: true });

io.on('connection' , socket => { //this is a listener for the connection event (listens to all connections to the server)  //when a connection is established to the server from any client
    console.log(socket.id); // here the current socket id is printed to the console
    console.log("Nice to meet you. (shake hand)")
    socket.emit("This is the name of the event", "Welcome to the server");
    socket.on("test" , msg =>{
            io.emit("test" , msg)
    })
    //io.emit('connection',"Welcome to the server");

    //on is listening
    //emit is sending
});