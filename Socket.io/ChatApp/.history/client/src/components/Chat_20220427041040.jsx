import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));// here we established a socket connection towards our server

    useEffect(() => {
        //console.log('client established socket connection');
        socket.on("welcome", (msg) => { //here we added a listener to listen for the event and then we printed the data that is inside the event
          console.log(msg);
        });
      });
 
      const handleSubmit = (e) =>{
        e.preventDefault();
        socket.emit('test' , txt)
      }
  



  return (
    <div>
        <h1>Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTxt(e.target.value)  } />
          <input type="submit" value="send" />

        </form>
    </div>
  )
}

export default Chat