import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({image,name,price,desc,id}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className="showcase" style={{height:"250px"}}>
          <div className="showcase-banner">
            <img
            style={{
                width:"200px",
                height:"180px"
            }}
              src={image}
              alt="img"
              className="product-img default"
              width="300"
              height="200"
            />
            <img
            style={{
                width:"200px",
                height:"180px"
            }}
            src={image}
            alt="img"
              className="product-img hover"
              width="300"
            />

            
          </div>

          <div className="showcase-content ">
            <a href="#" className="showcase-category">
              {name}
            </a>

            

            

            <div className="price-box">
              <p className="price">{price}EGP</p>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default CardItem
