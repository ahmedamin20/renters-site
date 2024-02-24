import React from "react";
import AdsSection from "../ads/adsSection";
import Div from "../../common/Div";
import CategoryBar from "../../common/CategoryBar";
import UserAndOrderPage from "../../common/userAndOrderScreen/userAndOrderPage";
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
        <UserAndOrderPage />
      </Div>
    </>
  );
};

export default HomePage;
