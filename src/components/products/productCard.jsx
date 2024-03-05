import React from "react";
import RateStar from "../common/rateStar";
import MainButton from "../common/mianBtn";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  console.log(product)
  return (
    <Link to={`/product/${product.id}`}>
    <div class="showcase">

    <a href="#" class="showcase-img-box">
        <img src={product?.main_image}
            alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img"/>
    </a>

    <div class="showcase-content">

        <a href="#">
            <h4 class="showcase-title">{product?.description}</h4>
        </a>

        <a href="#" class="showcase-category">{product?.category?.name}</a>

        <div class="price-box">
            <p class="price">{product?.price}EG</p>
            {/*<del>$12.00</del>*/}
        </div>

    </div>

</div>
    </Link>
  );
};

export default ProductCard;
