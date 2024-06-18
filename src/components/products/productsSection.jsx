import React from "react";
import ProductCard from "./productCard";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { getAllProducts } from "../../api/queries/products";
import ProductsSidebar from "./sidebar";
import BestSeatcion from "./bestSeatcion";
import CardTest from "./card";

const ProductsSection = () => {
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS],
    queryFn: getAllProducts,
  });
  return (
    <div className="product-container">
      <div className="container">
        <ProductsSidebar />
        <div className="product-box"> 
          <CardTest isMyProduct={false} data={data?.data} />
          <div className="product-minimal">
            <div className="product-showcase">
              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
