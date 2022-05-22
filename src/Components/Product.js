import React from 'react';
import { Card ,Button} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Product({product}) {
 
  
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Text>
                   {product.name}
                </Card.Text>
                <Link to={`/products/${product.id}`}>
                <Button variant="primary">see details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product