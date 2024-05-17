import React from "react";
import CardItem from "./cardItem";

const CardTest = ({ data, title, isMyProduct }) => {
  console.log(isMyProduct)
  return (
    <div className="product-main">
      <h2 className="title">{title || "New Products"}</h2>

      <div className="product-grid">
      {data?.map(item=>(

        <CardItem key={item.id} isMyProduct={isMyProduct} id={item?.id} name={item?.name} price={item?.price} desc={item?.description} image={item?.main_image}/>
      ))}
      </div>
    </div>
  );
};

export default CardTest;
