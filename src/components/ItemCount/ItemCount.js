import React, {useState} from "react";
import {Button} from 'react-bootstrap';

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        if(stock>counter){
        setCounter(counter+1);
        }else {
            alert("No hay mas stock de este producto")
        }
    }
    
    const decrementar = () => {
        if(counter>1){
            setCounter(counter-1);
        }else {
            alert("no se puede disminuir mas!")
        }
    }

    const respuesta = () => {
        alert(`Agregaste ${counter}`)
       
    }

    return (
        <div>
            <h2>{counter}</h2>
            <div>
                <Button variant="primary" onClick={decrementar}>-</Button>
                <Button variant="primary" onClick={incrementar}>+</Button>
            </div>
            <Button variant="primary" size="lg" onClick={respuesta}>
                Agregar al carrito!
            </Button>

            
        </div>
    )

}