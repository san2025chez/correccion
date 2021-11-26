import { Container } from 'react-bootstrap';
import React from 'react';
import {useEffect,useState} from 'react'
import { ProductCard } from '../ProductCard/ProductCard';
import { ItemCount } from '../ItemCount/ItemCount';
import imagenes from '../../imagenes/corset.jpg'
import {pedirDatos} from '../../helpers/pedirDatos'
import {ItemList} from '../ItemList/ItemList'



export const ItemListContainer = (  ) => {

    const [item, setItem] = useState([])

    useEffect(() => {
      pedirDatos().then((resp) => {
setItem(resp)
      })
    }, [])
console.log(item);
    return (
        <Container className="my-5">
            <ItemList dato={item}/>
          {/*   <h2>{greeting}</h2>
            <hr/>
            <ProductCard img={imagenes} stock="10" />
            <ProductCard img={imagenes} stock="10" />
            <ItemCount/> */}
          
        </Container>
    )
}

