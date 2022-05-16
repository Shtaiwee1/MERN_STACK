import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams , Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../images/test.jpg';


const FoodList = () => {
    const [foods , setFoods] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/food')
            .then(res=>{
              setFoods(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);




  return (
      
    <div>
        <div style={{display:"flex" , justifyContent:'start' , alignItems:'center' , border:'solid black 1px' , width:'400px' }}>
            <p style={{marginLeft:'20px'}} >List</p>
            <Link style={{margin:'5px'}} to="/dashboard">Dashboard</Link>
            <Link style={{margin:'5px'}} to= "/form">Form</Link>
        </div>
        
        <div>
        {foods.map((food , index )=>(
          <div key={index} style={{ display:'inline-block' , overflowX:'auto' , justifyContent:'start'}}>
                <Card style={{margin:'30px'}}   sx={{ maxWidth: 300 }}>
                {loaded && (<img src={require("../images/" + food.image)}
                  
                  className="imgCard"
                  style={{ height: "250px", width: "250px" }}
                  
                  alt="food"
                />)}
                <CardContent>
                  <Typography  gutterBottom variant="h5" component="div">
                    {food.name}
                  </Typography>
                  <Typography  variant="body2" color="text.secondary">
                  <Link to={"/detail/" + food._id}>details</Link>        </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </div>

))}
        </div>

    
    </div>
  )
}

export default FoodList