import React, { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "../home/nav";
import Footer from "../home/footer";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <>
      <div className="flex flex-row gap-[35px] font-medium  w-full ltr:pr-[25px] rtl:pl-[25px] ">
        <main
          className={` h-full w-full overflow-x-hidden flex flex-col gap-[35px] pb-[50px]`}
        >
          <Navbar />
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </main>
      </div>
      <Footer />
    </>
  );
}
