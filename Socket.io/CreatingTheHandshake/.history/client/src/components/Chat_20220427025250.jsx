import React, { useState, useEffect } from 'react';


const Chat = () => {
    //const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        //console.log('client established socket connection');
        socket.on("Welcome", (msg) => {
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