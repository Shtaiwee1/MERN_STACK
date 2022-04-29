import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        //console.log('client established socket connection');
        socket.on("This is the name of the event", (msg) => { //here we added a listener to listen for the event and then we printed the data that is inside the event
          console.log(msg);
        });
      });
 

  



  return (
    <div>
        <h1>Helloooooooooo</h1>
    </div>
  )
}

export default Chat