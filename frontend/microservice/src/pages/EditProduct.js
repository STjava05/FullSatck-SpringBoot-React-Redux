import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

    let navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        nom: "",
        prix: "",
        description: "",
        url: ""
    });

    const { nom, prix, description, url } = product

    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/${id}`, product)

        navigate('/');

    };

    const loadProduct = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);
    }, [id]);

    useEffect(() => {
        loadProduct();
    }, [loadProduct]);

    return (
        <div className='Container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center mb-4'>Edit Product</h2>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='nom' className='form-label'>Nom</label>
                            <input type='text' className='form-control' name='nom'
                                onChange={(e) => onInputChange(e)} value={nom} placeholder='enter your name' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='prix' className='form-label'>Prix</label>
                            <input type='text' className='form-control' name='prix'
                                onChange={(e) => onInputChange(e)} value={prix} placeholder='enter the price' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>Description</label>
                            <input type='text' className='form-control' name='description'
                                onChange={(e) => onInputChange(e)} value={description} placeholder='make a description' />

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='url' className='form-label'>Url</label>
                            <input type='text' className='form-control' name='url'
                                onChange={(e) => onInputChange(e)} value={url} placeholder='enter your url' />

                        </div>
                        <button type='submit' className='btn btn-outline-primary'>submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>

                </div>

            </div>
        </div>
    )
}


export default EditProduct