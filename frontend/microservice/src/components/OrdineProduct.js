


import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
//import { useLocation } from 'react-router-dom';


const OrdineProduct = ({ selectedProducts, onProductDeselection }) => {
    return (
        <Container>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>


                {selectedProducts && selectedProducts.map((product) => (
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

                                <button onClick={() => onProductDeselection(product)}>Rimuovi dall'ordine</button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default OrdineProduct;



/*
const OrdineProduct = () => {
    const location = useLocation();
    const selectedProducts = location.state?.selectedProducts || [];

    return (
        <Container>
            <h2 className="mt-4 text-center">Produits Sélectionnés</h2>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                {selectedProducts.length > 0 ? (
                    selectedProducts.map((product) => (
                        <Col className='mt-5' key={product.id}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={product.url} style={{ height: "200px", objectFit: "cover" }} />
                                <Card.Body>
                                    <Card.Title><b>{product.nom}</b></Card.Title>
                                    <Card.Text>{product.prix}€</Card.Text>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">Aucun produit sélectionné</p>
                )}
            </Row>
        </Container>
    );
};

export default OrdineProduct;

*/
