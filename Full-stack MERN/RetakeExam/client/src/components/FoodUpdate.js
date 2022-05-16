import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import FoodForm from './FoodForm'
import DeleteButton from './DeleteButton'
import { Link } from 'react-router-dom';

const FoodUpdate = () => {

    const { id } = useParams();
    const [food, setFood] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/food/' + id)
            .then(res => {
                setFood(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updateFood = food => {
        axios.put('http://localhost:8000/api/food/' + id, food)
            .then(res => console.log(res),
            navigate("/dashboard"));
    }
    






  return (
    <div>
        <div style={{display:"flex" , justifyContent:'start' , alignItems:'center' , border:'solid black 1px' , width:'400px' }}>
            <Link style={{marginLeft:'20px'}} to="/dashboard" >Dashboard</Link>
            <Link style={{margin:'5px'}} to="/list">List</Link>
            <Link style={{margin:'5px'}} to= "/form">Form</Link>
        </div>
        <h1>Update Food</h1>
            {loaded && (
                <>
                    <FoodForm
                        onSubmitProp={updateFood}
                        initialName={food.name}
                        initialKitchen={food.kitchen}
                        initialImage={food.image}
                        initialRecipe={food.recipe}
                    />
                    <DeleteButton foodId={food._id} successCallback={() => navigate("/dashboard")} />
                </>
            )}

    </div>
  )
}

export default FoodUpdate