import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "../home/footer";
import { Outlet } from "react-router-dom";
import withGuard from "../../utils/with_guard";
import NewNavbar from "../home/Navbar/navbar";
import { axiosInterceptor } from "../../../axiosInterseptor";
import Chat from "../chatbot/chat";
// import Header from "../home/testHeader/header";

const Wrapper = () => {
  axiosInterceptor();
  return (
    <div className="">
      <div className="flex flex-row font-medium  w-full ltr:pr-[25px] rtl:pl-[25px] overflow-hidden">
        <main
          className={` h-full w-full overflow-x-hidden flex flex-col pb-[50px]`}
        >
          <NewNavbar />

          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default withGuard(Wrapper);
