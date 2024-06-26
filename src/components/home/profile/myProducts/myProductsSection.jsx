import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMyProducts } from "../../../../api/queries/myProducts";
import { ROUTE } from "../../../../utils/config/constantRoutes";
import Button from "../../../button";
import CardTest from "../../../products/card";

const MyProductsSection = () => {
  const { data } = useQuery({
    queryKey: "getMyProducts",
    queryFn: getMyProducts,
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
      <h2 className="text-start my-4 font-bold text-[20px]">
        Manage Your Products
      </h2>
      <Button to={ROUTE.PROFILE_ROUTE.ADD_PRODUCTS} text="Add"/>
      </div>
      <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
        <CardTest title={" "} isMyProduct={true} data={data?.data}/>
      </div>
    </div>
  );
};

export default MyProductsSection;
