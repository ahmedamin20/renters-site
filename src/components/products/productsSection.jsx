import React from "react";
import ProductCard from "./productCard";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { getAllProducts } from "../../api/queries/products";

const ProductsSection = () => {
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS],
    queryFn: getAllProducts,
  });

  return (
    <div className="flex justify-evenly flex-wrap w-full">
      {data?.data.map((item) => (
        <div className="w-[25%] sm:w-[75%] md:w-[45%] lg:w-[25%]">
          <ProductCard key={item.id} product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
