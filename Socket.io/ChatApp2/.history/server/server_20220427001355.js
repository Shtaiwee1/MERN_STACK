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

io.on('connection' , socket => {
    console.log(socket.id);
    console.log("Nice to meet you. (shake hand)")

    io.emit('connection',"Welcome to the server");

    //on is listening
    //emit is sending
});