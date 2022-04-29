import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));// here we established a socket connection towards our server
    const [txt , setTxt] = useState("");
    const [chat , setChat] = useState([]);


    useEffect(() => {
        //console.log('client established socket connection');
        socket.on("connection", (data) => console.log(data)); //here we added a listener to listen for the event and then we printed the data that is inside the event
        socket.on('test' , data =>setChat([...chat , data]));//when a connection is established liten to the test event and wahtever data is received set the chat to it's previous state and add the new data to it.
      });
 
      const handleSubmit = (e) =>{
        e.preventDefault();
        socket.emit('test' , txt)// the client sends to the server on the event called test whatever written in the form
      }
  


      //here we are mapping through chat which is a variable holding an array of text and display each item inside it in a paragraph
      //Note: every one of then is prited on a different line because the paragraph element is by default
  return (
    <div>
        <h1>Chat App</h1>
        {chat.map((item , i) => <p key={i}>{item}</p>  )}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTxt(e.target.value)  } />
          <input type="submit" value="send" />

        </form>
    </div>
  )
}

export default Chat