import React from "react";
import RateStar from "../common/rateStar";
import CardHeader from "./cardHeader";
import AcceptAndRejectFooter from "../common/acceptAndRejectFooter";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { AcceptRequest, RejectRequest } from "../../api/queries/requests";
import Modal from "../popupForm";

const RequestCard = ({canceled, id, user, product, isMyOrder, isCancelPending, cancel }) => {
  const {
    mutate: accept,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.ACCEPT_REQUEST,
    mutationFn: () => AcceptRequest(id),
  });

  const {
    mutate: reject,
    isPending: rejectPending,
    isError: rejectError,
    isSuccess: rejectDone,
  } = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.REJECT_REQUEST,
    mutationFn: () => RejectRequest(id),
  });
  return (
    <div className="min-w-[250px] my-3 mx-auto bg-itemsBgLight dark:bg-itemsBgDark rounded-lg overflow-hidden shadow-lg">
      <div className="border-b w-full">
        <CardHeader
          userName={user?.name}
          productImage={product?.main_image}
          productName={product?.name}
        />
        {isMyOrder ? <AcceptAndRejectFooter reject={reject} accept={accept} />
        : !canceled ?
        <Modal className={"bg-red mx-auto flex justify-center items-center p-0 my-2 h-8 w-8"} disable={isPending} onClick={()=>cancel(id)} innerBtnText={"Yes"} text={"X"}>
          <span>Are You Sure?</span>
        </Modal>
        : <div className="bg-red mx-auto flex justify-center items-center p-2 rounded-md shadow-2xl text-white my-2 w-fit">
          <span>Canceled</span>
          </div>
      }
      </div>
      <div className="px-4 py-4">
        <div className="flex w-fit mx-auto gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
          <RateStar />
          <RateStar />
          <RateStar />
          <RateStar />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
