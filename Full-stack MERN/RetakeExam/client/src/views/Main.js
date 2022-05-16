import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Button} from "@mui/material"
import {Link} from "react-router-dom"

const Main = () => {
  const [food, setFood] = useState(0);
    const [foods, setFoods] = useState([]);
  const [errors, setErrors] = useState([]); 
    const [loaded, setLoaded] = useState(false);
    const [foodLoaded, setFoodLoaded] = useState(false);
    const [nameLoaded, setNameLoaded] = useState(false);
    
  useEffect(()=>{
    axios.get('http://localhost:8000/api/food')
        .then(res=>{
          setFoods(res.data);
            setLoaded(true);
            setFoodLoaded(true);
            setNameLoaded(true)
        })
        .catch(err => console.error(err));
},[]);



const notLike = () =>{
  var food = Math.floor(Math.random()* foods.length);
  setFood(food)
}
const Like =()=>{
  axios.put('http://localhost:8000/api/food/'+ foods[food]._id)
          .then(res=>{
              var updatedView = Math.floor(Math.random()* foods.length);
              setFood(updatedView)
          })
          .catch(err => console.error(err));
}





  return (
    
    <div>
      { loaded && (
      <div>
        <div style={{display:"flex" , justifyContent:'start' , alignItems:'center' , border:'solid black 1px' , width:'400px' }}>
            <p style={{marginLeft:'20px'}} >Dashboard</p>
            <Link style={{margin:'5px'}} to="/list">List</Link>
            <Link style={{margin:'5px'}} to= "/form">Form</Link>
        </div>
        <div>
          {nameLoaded &&(<p>{foods[food].name}</p>)}
          <div className="col">

                {foodLoaded && (<img src={require("../images/" + foods[food].image)}
                  
                  className="imgCard"
                  style={{ height: "300px", width: "300px" , marginRight:'50px' }}
                  
                  alt="food picture"
                />)}


              </div>
        </div>

        <div style={{marginTop:'40px'}}>
            <p>Do you like the food?</p>
            <Button variant="contained" color='error' onClick={notLike}>No</Button>
            <Button style={{marginLeft:'20px'}} variant="contained" color='success' onClick={Like}>Yes</Button>
        </div>
      </div>
      )}
    </div>
    
  )
}

export default Main