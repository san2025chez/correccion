import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({dato}) => {

    return (
        <Container className="my-5">
            <h2>Productos</h2>
            <hr/>
          
                {dato.map((prod) => <Item key={prod.name} {...prod}/>)}
        
        </Container>
    )
}