import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { CancelRequest, getOutcomeRequest } from "../../api/queries/requests";
import { API_ENDPOINTS, ORDER_STATUS, ORDER_STATUS_ENUM } from "../../utils/config/constants";
import RequestCard from "./requestCard";

const OutcomRequestSection = () => {
  const [showCanceld, setShowCanceld] = useState(false)
  const querClient = useQueryClient()
  const { data } = useQuery({
    queryKey: API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS,
    queryFn: getOutcomeRequest,
  });
  console.log(data?.data)
  const { mutate: cancel, isPending } = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.CANCEL_REQUEST,
    mutationFn: (id) => CancelRequest(id),
    onSuccess: ()=>querClient.invalidateQueries(API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS),
    onError:  ()=>querClient.invalidateQueries(API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS)
  });


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <h2 className="text-start my-4 font-bold text-[20px]">
        Manage Your Outcoming Requests
      </h2>
      <span className="underline text-sm text-primary cursor-pointer" onClick={()=>setShowCanceld(!showCanceld)}>Show canceled</span>
      </div>
      <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
        {data?.data?.map((item) => item?.status !== ORDER_STATUS_ENUM.CANCELED && (
          <RequestCard
            isMyOrder={!!item?.from_user}
            cancel={cancel}
            isCancelPending={isPending}
            user={item?.to_user}
            product={item?.product}
            key={item.id}
            canceled={false}
            id={item?.id}
          />
        ))}
      </div>
      {showCanceld && (
        <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
        {data?.data?.map((item) => item?.status == ORDER_STATUS_ENUM.CANCELED && (
          <RequestCard
            canceled={true}
            isMyOrder={!!item?.from_user}
            cancel={cancel}
            isCancelPending={isPending}
            user={item?.to_user}
            product={item?.product}
            key={item.id}
            id={item?.id}
          />
        ))}
      </div>
    )
    }
    </div>
  );
};

export default OutcomRequestSection;
