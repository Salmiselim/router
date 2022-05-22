import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"

function ProductDetails({ products }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const product = products.find((elt) => elt.id.toString() === id)
    const handleClick = () => {
        navigate('/')
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Text>
                    {product.name}
                </Card.Text>
                {product.price} $
            </Card.Body>
            <Button onClick={handleClick}>
                back to home
            </Button>
        </Card>
    )
}

export default ProductDetails