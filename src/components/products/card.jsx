import React from "react";
import CardItem from "./cardItem";

const CardTest = ({ data }) => {
  return (
    <div class="product-main">
      <h2 class="title">New Products</h2>

      <div class="product-grid">
      {data?.map(item=>(

        <CardItem id={item?.id} name={item?.name} price={item?.price} desc={item?.description} image={item?.main_image}/>
      ))}
      </div>
    </div>
  );
};

export default CardTest;
