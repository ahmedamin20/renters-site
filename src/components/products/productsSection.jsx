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
          <div className="product-minimal">
            <div className="product-showcase">
              <h2 className="title">All For Rent</h2>
              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                
                {data?.data.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
                <BestSeatcion product1={data?.data[0]} product2={data?.data[1]}/>
                
                </div>
                </div>
                
                </div>
                </div>
                <CardTest data={data?.data}/>
          </div>
          
          </div>
    </div>
  );
};

export default ProductsSection;
