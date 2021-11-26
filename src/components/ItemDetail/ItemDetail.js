import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ name, hobby}) => {

    return (
        <article key={name} className="card m-3" style={{width: "18rem"}}>
     {/*        <img src={img} alt={name}/> */}
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h3 className="card-title">{hobby}</h3>
              
              {/*   <Link to={`/detail/${id}`} className="btn btn-primary">Ver más</Link> */}
            </div>
        </article>
    )
}