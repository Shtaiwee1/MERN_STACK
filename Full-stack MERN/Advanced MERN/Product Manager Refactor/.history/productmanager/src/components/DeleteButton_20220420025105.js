import React from 'react'
import axios from 'axios';
import { Paper, Card , Button } from '@material-ui/core';
    
export default props => {
    
    const { productId, successCallback } = props;
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <Button onClick={deleteProduct}>
            Delete
        </Button>
    )
}
