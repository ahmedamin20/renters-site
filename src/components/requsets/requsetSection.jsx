import React from "react";
import RequestCard from "./requestCard";
import { useQuery } from "@tanstack/react-query";
import { getIncomeRequests } from "../../api/queries/requests";
import { API_ENDPOINTS } from "../../utils/config/constants";

const RequestSection = () => {

  const {data} = useQuery({
    queryKey: API_ENDPOINTS.REQUESTS.INCOME_REQUESTS,
    queryFn:  getIncomeRequests,
  })
  
  
  return (
    <div className="flex flex-col gap-4">
    <h2 className="text-start my-4 font-bold text-[20px]">Manage Your Incoming Requests</h2>
    <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
        <RequestCard />
      </div>
    </div>
  );
};

export default RequestSection;
