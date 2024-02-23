import React from "react";
import AdsSection from "../ads/adsSection";
import Div from "../../common/Div";
import CategoryBar from "../../common/CategoryBar";
import UserAndOrderPage from "../../common/userAndOrderScreen/userAndOrderPage";
import Login from "../../auth/signIn/login";
import Signup from '../../auth/signUp/signup';
import RequestSection from "../../requsets/requsetSection";
import ProductsSection from "../../products/productsSection";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <CategoryBar />
        <ProductsSection />
        <RequestSection />
        {/* <Signup/>*/}
        {/* <Login/>*/}
        <UserAndOrderPage />
      </Div>
    </>
  );
};

export default HomePage;
