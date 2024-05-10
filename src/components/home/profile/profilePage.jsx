import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import {
  getProfile,
  updatePassword
} from "../../../api/queries/profile";
import { API_ENDPOINTS } from "../../../utils/config/constants";
import Div from "../../common/Div";
import SidebarNavigate from "./sidebarNavigate";

export default function ProfilePageComponent() {

  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.PROFILE],
    queryFn:  getProfile,
  });
  console.log(data,"profile")
  
  
  console.log(data,"profileData")
  return (
    data?.data&&
    <Div className="grid grid-cols-4 gap-[20px] px-3  py-10">
    <SidebarNavigate/>
    <div className="col-span-3 shadow-md p-4 rounded-md border-gray-200 border w-[90%] mx-auto"> 
      <Outlet/>
    </div>      
      </Div>
    );
  }
  // <PasswordForm isPasswordLoading={isPasswordLoading} passWordRef={passWordRef} handlePasswordSubmit={handlePasswordSubmit}/>
