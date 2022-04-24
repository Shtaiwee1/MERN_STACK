import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Paper, Card , Button } from '@material-ui/core';


export default props => {
    //keep track of what is being typed via useState hook
    const {initialTitle , initialPrice , initialDescription , onSubmitProp} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        onSubmitProp({title , price , description});
    }
    //onChange to update Title, price and description
    return (
        <form onSubmit={onSubmitHandler}>
            
            
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea rows="4"  cols="50" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>

        
        </form>
    )
}