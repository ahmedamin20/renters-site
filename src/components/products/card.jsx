import React from "react";
import CardItem from "./cardItem";

const CardTest = ({ data, title, isMyProduct }) => {
  return (
    <div className="product-main">
      <h2 className="title !border-none">{title || ""}</h2>

      <div className="flex w-full flex-wrap gap-[10px] ">
        {data?.map((item) => (
          <CardItem
            key={item.id}
            isMyProduct={isMyProduct}
            id={item?.id}
            name={item?.name}
            price={item?.price}
            desc={item?.description}
            image={item?.main_image}
            className={"md:w-[300px]"}
          />
        ))}
      </div>
    </div>
  );
};

export default CardTest;
