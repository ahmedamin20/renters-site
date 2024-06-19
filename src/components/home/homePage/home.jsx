import React from "react";
import Div from "../../common/Div";
import AdsSection from "../ads/adsSection";
import ShopByCategory from "../shopByCatigory/shopByCatigorySection";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <ShopByCategory/>
      </Div>
    </>
  );
};

export default HomePage;
