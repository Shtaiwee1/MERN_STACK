import React, { useEffect, useState } from 'react'
import {Button} from "@mui/material"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const FoodDetail = (props) => {

    const { removeFromDom } = props;
    const [food, setFood] = useState({})
    const [foodLoaded, setFoodLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/food/' +id)
            .then(res => {setFood(res.data);
            setFoodLoaded(true)})
            
            .catch(err => console.error(err));
    }, []);

    const deleteFood = (foodId) => {
        axios.delete('http://localhost:8000/api/food/' + foodId)
            .then(res => 
                removeFromDom(foodId),navigate("/dashboard")
                
            )
            .catch(err => console.error(err));
    }


  return (
    <div>
        <div style={{display:"flex" , justifyContent:'start' , alignItems:'center' , border:'solid black 1px' , width:'400px' }}>
            <Link style={{marginLeft:'20px'}} to="/dashboard" >Dashboard</Link>
            <Link style={{margin:'5px'}} to="/list">List</Link>
            <Link style={{margin:'5px'}} to= "/form">Form</Link>
        </div>
        <div style={{display:'flex' , justifyContent:'space-around' , width:'600px' , marginLeft:'500px'}}>
            <strong><p>{food.name}</p></strong>
        <p>Recipe:</p>
        </div>
        <div style={{display:'flex'  , justifyContent:'center'}}>
        {foodLoaded && (<img src={require("../images/" + food.image)}
                  
                  className="imgCard"
                  style={{ height: "300px", width: "300px" , marginRight:'50px' }}
                  
                  alt="food"
                />)}
           
        <div style={{border:'solid black 1px' , padding:'20px' , width:'300px'}}>
        
        <p> {food.recipe}</p>
        </div>
        </div>
        <div style={{ marginTop:'40px'}}>
        <Button variant='contained' color='error' onClick={(e)=>{deleteFood(food._id)}}>Delete</Button>      
        <Button style={{ marginLeft:'20px'}} variant='contained' color='primary'><Link style={{textDecoration:'none' , color:'white' }} to={"/edit/" + food._id}>Edit</Link></Button>
        </div>
    </div>
  )
}

export default FoodDetail