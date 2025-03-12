


// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { BsFillPencilFill, BsTrash3Fill, BsFillEyeFill, BsCart4 } from 'react-icons/bs'
// import OrdineProduct from '../components/OrdineProduct';

// const Home = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedProducts, setSelectedProducts] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     const handleSearchChange = (e) => {
//         setSearchText(e.target.value);
//     }

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     const loadProducts = async () => {
//         const result = await axios.get("http://localhost:8080/products");
//         setProducts(result.data);
//     }

//     const deleteProduct = async id => {
//         await axios.delete(`http://localhost:8080/product/${id}`);
//         loadProducts();
//     }

//     const HandleProductSelected = (product) => {
//         setSelectedProducts([...selectedProducts, product]);
//     }

//     const handleProductDeselected = (product) => {
//         const updateProducts = selectedProducts.filter((selectedProduct) => selectedProduct.id !== product.id);
//         setSelectedProducts(updateProducts)

//     }

//     const filteredProducts = products.filter((product) =>
//         product.nom.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <Container>
//             <Row className='mt-4 d-flex justify-content-center align-items-center'>
//                 {/* Campo di ricerca collegato a handleSearchChange */}
//                 <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />

//                 {filteredProducts.map((product) => (
//                     <Col className='mt-5' key={product.id}>
//                         <Card style={{ width: '15rem' }}>
//                             <Card.Img variant="top" src={product.url} style={{ height: "200px", objectFit: "cover" }} />
//                             <Card.Body>
//                                 <Card.Title><b>{product.nom}</b></Card.Title>
//                                 <Card.Text>
//                                     {product.prix}€
//                                 </Card.Text>
//                                 <Card.Text>
//                                     {product.description}
//                                 </Card.Text>
//                                 <Link className='btn btn-outline-secondary mx-2' to={`/viewProduct/${product.id}`}><BsFillEyeFill /></Link>
//                                 <Link className="btn btn-outline-primary mx-2" to={`/editProduct/${product.id}`}><BsFillPencilFill /></Link>

//                                 <button onClick={() => deleteProduct(product.id)} className='btn btn-outline-danger'><BsTrash3Fill /></button>
//                                 <Link onClick={() => HandleProductSelected(product)} className='btn btn-outline-success' to={`/ordineProduct/${product.id}`}><BsCart4 /></Link>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             <OrdineProduct
//                 selectedProducts={selectedProducts} onProductDeselection={handleProductDeselected}
//             />
//         </Container>
//     )
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillPencilFill, BsTrash3Fill, BsFillEyeFill, BsCart4 } from 'react-icons/bs'
import OrdineProduct from '../components/OrdineProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    //const navigate = useNavigate();
    /*
    const goToOrdineProductPage = () => {
        navigate('/ordineProduct', { state: { selectedProducts } });
    };
    */


    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/products");
        setProducts(result.data);
    }

    const deleteProduct = async id => {
        await axios.delete(`http://localhost:8080/product/${id}`);
        loadProducts();
    }

    const HandleProductSelected = (product) => {
        setSelectedProducts([...selectedProducts, product]);
    }

    const handleProductDeselected = (product) => {
        const updateProducts = selectedProducts.filter((selectedProduct) => selectedProduct.id !== product.id);
        setSelectedProducts(updateProducts)

    }

    const filteredProducts = products.filter((product) =>
        product.nom.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                {/* Campo di ricerca collegato a handleSearchChange */}
                <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />

                {filteredProducts.map((product) => (
                    <Col className='mt-5' key={product.id}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={product.url} style={{ height: "200px", objectFit: "cover" }} />
                            <Card.Body>
                                <Card.Title><b>{product.nom}</b></Card.Title>
                                <Card.Text>
                                    {product.prix}€
                                </Card.Text>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Link className='btn btn-outline-secondary mx-2' to={`/viewProduct/${product.id}`}><BsFillEyeFill /></Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editProduct/${product.id}`}><BsFillPencilFill /></Link>

                                <button onClick={() => deleteProduct(product.id)} className='btn btn-outline-danger'><BsTrash3Fill /></button>
                                <Link onClick={() => HandleProductSelected(product)} className='btn btn-outline-success'><BsCart4 /></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <OrdineProduct
                selectedProducts={selectedProducts} onProductDeselection={handleProductDeselected}
            />


        </Container>
    )
}

export default Home;
