import React from "react";
import AdsSection from "../ads/adsSection";
import Div from "../../common/Div";
import ProductCard from "../../common/productCard";
import CategoryBar from "../../common/CategoryBar";
import ShowUser from "../../common/showUser";
import UserAndOrderPage from "../../common/userAndOrderScreen/userAndOrderPage";
import Login from "../../auth/signIn/login";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <CategoryBar />
        <ProductCard />
        <ShowUser />
        <Login/>
        <UserAndOrderPage />
      </Div>
    </>
  );
};ShowUser

export default HomePage;
