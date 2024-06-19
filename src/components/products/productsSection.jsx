import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProducts } from "../../api/queries/products";
import { API_ENDPOINTS } from "../../utils/config/constants";
import CardTest from "./card";
import ProductsSidebar from "./sidebar";

const ProductsSection = () => {
  const [selected, setSelected] = useState("")
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS, selected],
    queryFn: ()=>getAllProducts(selected),
  });
  return (
    <div className="product-container">
      <div className="container">
        <ProductsSidebar selected={selected} setSelected={setSelected} />
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
