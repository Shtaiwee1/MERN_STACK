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

io.on('connection' , socket => { //this is a listener for the connection event (listens to all connections to the server)  //when a connection is established to the server from any client you will establish a socket and console log it's id
    console.log(socket.id); // here the current socket id is printed to the console in the server side
    console.log("Nice to meet you. (shake hand)")
    socket.emit("welcome", "Welcome to the server");//This is the name of the event and the data to transfer inside it, you can write here whatever you want but the name of the event must be identical to the name of the event that is being listened to in the client (Chat.jsx)
    //the msg is being sent from the server to the client using socket.emit and then printed to the console in the client side
    
    socket.emit('connection' , null);


    socket.on("test" , msg =>{
        console.log(msg)
            io.emit("test" , msg)
    })
    //io.emit('connection',"Welcome to the server");

    //on is listening
    //emit is sending
});