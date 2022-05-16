import React , {useState} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import FoodForm from './FoodForm';

const NewFood = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createFood = food => {
        axios.post('http://localhost:8000/api/food', food)
            .then(res => {
                console.log("Response", res);
                navigate("/dashboard");
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                
                setErrors(errorArr);
            })
    }






  return (
    <div>
        <div style={{display:"flex" , justifyContent:'start' , alignItems:'center' , border:'solid black 1px' , width:'400px' }}>
            <p style={{marginLeft:'20px'}} >Form</p>
            <Link style={{margin:'5px'}} to="/dashboard">Dashboard</Link>
            <Link style={{margin:'5px'}} to= "/list">List</Link>
        </div>
            <Link to="/dashboard" style={{textDecoration:"none" , position:"absolute" , top:30,right:30}}><Button variant="outlined">Back To Dashboard</Button></Link>
            <div style={{  display:"inline-block" , padding:"70px"}}>
                
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <FoodForm onSubmitProp={createFood} initialDate="" initialTitle=""  />
            </div>

    </div>
  )
}

export default NewFood