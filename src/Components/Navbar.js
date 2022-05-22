import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';


function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                
                    <Link to='/' style={{textDecoration:"none",color:"white"}}>Home</Link>
                    <Link to="/products"   style={{textDecoration:"none",color:"white"}}>Products</Link>

               
            </Container>
        </Navbar>
    )
}

export default CustomNavbar