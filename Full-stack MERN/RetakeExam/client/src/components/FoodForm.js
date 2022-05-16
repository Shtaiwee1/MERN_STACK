import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { TextField , Button } from "@mui/material"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const FoodForm = (props) => {
    const { initialName, initialImage, initialKitchen , initialRecipe, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);
    const [kitchen, setKitchen] = useState(initialKitchen);
    const [recipe, setRecipe] = useState(initialRecipe);
    const { pathname } = useLocation();


    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({ name , image , kitchen , recipe });
        setName("");
        setImage("");
        setKitchen("");
        setRecipe("");
    }




  return (
    <div>
        
        <form onSubmit={handleSubmit}>
                 
            <div style={{display:'flex' , justifyContent:'center' , width:'1700px' , alignItems:'center'}}>
                 <div >
                    <TextField style={{marginTop:'40px'}} id="outlined-basic" label="name" variant="outlined" onChange={e => setName(e.target.value)} value={name} /> <br />
                    <TextField style={{marginTop:'40px'}} id="outlined-basic" label="Image URL" variant="outlined" onChange={e => setImage(e.target.value)} value={image} /> <br />
                    <TextField style={{marginTop:'40px'}} id="outlined-basic" label="kitchen" variant="outlined" onChange={e => setKitchen(e.target.value)} value={kitchen} /> <br />
                </div>
                <div>
                    
                    <textarea placeholder='Recipe' style={{marginLeft:'80px'}} cols={25} rows={20} value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
                </div>
            </div>
            {pathname.includes("form")?(
                <Button variant="contained" type="send" style={{marginTop:"30px" }}>Add food</Button>

            ):(
                <Button variant="contained" type="send" style={{marginTop:"30px" }}>Update food</Button>

            )}
            </form>
    </div>
  )
}

export default FoodForm;