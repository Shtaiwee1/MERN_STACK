import  { useEffect, useState } from 'react'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { Paper, Card , Button } from '@material-ui/core';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    
useEffect(() => {
    axios.get('http://localhost:8000/api/products')
        .then(res => setProducts(res.data));
}, [])

const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
}
    
    return (
        <div>
            {products.map((product, idx) => {
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
                        <Button>This is UI</Button>
                       <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default ProductList;
