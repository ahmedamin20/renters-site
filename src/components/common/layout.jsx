import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "../home/footer";
import { Outlet } from "react-router-dom";
import withGuard from '../../utils/with_guard';
import NewNavbar from "../home/Navbar/navbar";

const  Wrapper = () => {
  return (
    <>
      <div className="flex flex-row gap-[35px] font-medium  w-full ltr:pr-[25px] rtl:pl-[25px] ">
        <main
          className={` h-full w-full overflow-x-hidden flex flex-col gap-[35px] pb-[50px]`}
        >
  {/* 

  <Navbar />
*/}          <NewNavbar/>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </main>
      </div>
      <Footer />
    </>
  );
}
export  default withGuard(Wrapper);