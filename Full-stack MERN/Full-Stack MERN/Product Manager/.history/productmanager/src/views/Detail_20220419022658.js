import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
    
const Detail = (props) => {
    const { removeFromDom } = props;
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
        </div>
    )
}
    
export default Detail;
