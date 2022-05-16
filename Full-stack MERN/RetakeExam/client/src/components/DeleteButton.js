import React from 'react'
import axios from 'axios'
import {Button} from "@mui/material"

const DeleteButton = (props) => {

    const { foodId, successCallback } = props;
    
    const deleteFood = e => {
        axios.delete('http://localhost:8000/api/food/' + foodId)
            .then(res=>{
                successCallback();//you can give successCallback a parameter id or not it's ok in both cases
            })
    }





  return (
    <div >
        <Button variant='contained' color="error" onClick={deleteFood}>Delete</Button>

    </div>
  )
}

export default DeleteButton