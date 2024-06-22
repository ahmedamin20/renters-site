import React from "react";
import CardItem from "./cardItem";

const CardTest = ({ data, title, isMyProduct }) => {
  return (
    <div className="product-main">
      <h2 className="title !border-none">{title || ""}</h2>

      <div className="flex flex-wrap gap-[10px] w-auto">
        {data?.map((item) => (
          <CardItem
            key={item.id}
            isMyProduct={isMyProduct}
            id={item?.id}
            name={item?.name}
            price={item?.price}
            desc={item?.description}
            image={item?.main_image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardTest;
