import  { useEffect, useState } from 'react'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { Paper, Card , Button } from '@material-ui/core';

const ProductList = (props) => {
    const {removeFromDom} = props;
    


    
    return (
        <div>
            {props.products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/products/" + product._id}>
                            {product.title}, {product.price} , {product.description}
                        </Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                        
                       <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default ProductList;
