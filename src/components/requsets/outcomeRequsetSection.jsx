import React from "react";
import RequestCard from "./requestCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CancelRequest, getOutcomeRequest } from "../../api/queries/requests";
import { API_ENDPOINTS } from "../../utils/config/constants";
import ProductCard from "../products/productCard";

const OutcomRequestSection = () => {

  const {data} = useQuery({
    queryKey: API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS,
    queryFn:  getOutcomeRequest,
  })
  
  const {mutate, isError, isPending, isSuccess} = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.CANCEL_REQUEST,
    mutationFn:(id)=>CancelRequest(id)
  })


  console.log(data)
  
  return (
    <div className="flex flex-col gap-4">
    <h2 className="text-start my-4 font-bold text-[20px]">Manage Your Outcoming Requests</h2>
    <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
      <RequestCard />
      {/*<ProductCard />*/}
      </div>
    </div>
  );
};

export default OutcomRequestSection;
