import React from "react";
import RateStar from "../common/rateStar";
import AcceptAndRejectFooter from "../common/acceptAndRejectFooter";
import RequestCard from "./requestCard";
import TextHead from "../common/headText";

const RequestSection = () => {
  return (
    <div className="flex flex-col gap-4">
    <TextHead >All of your Requests</TextHead>
    <div className=" bg-transparent flex flex-row justify-evenly flex-wrap pt-12">
    <RequestCard/>
    </div>
    </div>
  );
};

export default RequestSection;
