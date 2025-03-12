import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {
  // const [searchText,setSearchText]=useState("");
//  const [products,setProducts]=useState([])
  
//  const filteredProducts = Array.isArray(products)
//     ? products.filter((product) => product.nom.toLowerCase().includes(searchText))
//     : [];
// console.log(searchText);
//   console.log(filteredProducts);

    
 
  return (
    <Navbar expand="lg" className="bg-body-secondary">
    <Container fluid>
      <Navbar.Brand href="#"><b>Ou6nu</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
         
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Product</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Commande </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Payment</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled> services</Nav.Link>
        </Nav>
       
        {/* <Form className="d-flex">
          <Form.Control type="search" placeholder="Search"value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="me-2"aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
    <Link className='btn btn-outline-warning' to="/addProduct">AddProduct</Link>
  </Navbar>
  )
}

export default NavBar