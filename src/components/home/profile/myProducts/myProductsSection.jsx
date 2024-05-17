import React from "react";
import CardHeader from "../../../requsets/cardHeader";
import AcceptAndRejectFooter from "../../../common/acceptAndRejectFooter";
import RateStar from "../../../common/rateStar";
import { useQuery } from "@tanstack/react-query";
import { getMyProducts } from "../../../../api/queries/myProducts";
import { API_ENDPOINTS } from "../../../../utils/config/constants";
import Button from "../../../button";
import CardTest from "../../../products/card";

const MyProductsSection = () => {
  const { data } = useQuery({
    queryKey: "getMyProducts",
    queryFn: getMyProducts,
  });
  console.log(data?.data);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
      <h2 className="text-start my-4 font-bold text-[20px]">
        Manage Your Products
      </h2>
      <Button text="Add"/>
      </div>
      <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
        <CardTest title={" "} myProduct={true} data={data?.data}/>
      </div>
    </div>
  );
};

export default MyProductsSection;
