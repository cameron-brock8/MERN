import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
        <h1>Shop My Life</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}></Product>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
