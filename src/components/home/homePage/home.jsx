import React from "react";
import Div from "../../common/Div";
import AdsSection from "../ads/adsSection";
import ShopByCategory from "../shopByCatigory/shopByCatigorySection";
import ProductsSection from "../products/productsSection";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <ShopByCategory/>
        <ProductsSection/>
      </Div>
    </>
  );
};

export default HomePage;
