import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const ViewProduct = () => {

    
    const { id } = useParams();

    const [product, setProduct] = useState({
        nom: "",
        prix: "",
        description: "",
        url: ""
    });

   

     const loadProducts = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);
    }, [id]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    return (
        <div className='Container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center mb-4'> Product Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of product id:{product.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><b>Nom:</b>{product.nom}</li>
                                <li className='list-group-item'><b>prix:</b>{product.prix}</li>
                                <li className='list-group-item'><b>Description:</b>{product.description}</li>
                                <li className='list-group-item'><b>Url:</b>{product.url}</li>

                            </ul>

                        </div>

                    </div>
                    <Link className='btn btn-primary my-2'to="/">Back to home</Link>

                </div>

            </div>
        </div>
    )
}


export default ViewProduct