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
    <div className="!w-full flex flex-row gap-[20px]">
        <ProductsSidebar selected={selected} setSelected={setSelected} />
          <CardTest isMyProduct={false} data={data?.data} />
          
    </div>
  );
};

export default ProductsSection;
