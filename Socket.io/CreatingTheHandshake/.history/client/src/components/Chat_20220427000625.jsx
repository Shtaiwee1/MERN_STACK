import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
    console.log('client established socket connection');
    socket.on('connection', () => console.log("I'm connected to the server socket io"));
    return () => socket.disconnect(true);
  }, []);



  return (
    <div>
        <h1>Helloooooooooo</h1>
    </div>
  )
}

export default Chat