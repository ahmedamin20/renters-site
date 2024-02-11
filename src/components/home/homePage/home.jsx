import React from "react";
import AdsSection from "../ads/adsSection";
import Div from "../../common/Div";
import ProductCard from "../../common/productCard";
import CategoryBar from "../../common/CategoryBar";
import ShowUser from "../../common/showUser";
import UserAndOrderPage from "../../common/userAndOrderScreen/userAndOrderPage";
import Login from "../../auth/signIn/login";
import Signup from '../../auth/signUp/signup';

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <CategoryBar />
        <ProductCard />
        <ShowUser />
        <Signup/>
        <Login/>
        <UserAndOrderPage />
      </Div>
    </>
  );
};ShowUser

export default HomePage;
