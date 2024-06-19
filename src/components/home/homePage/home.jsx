import React from "react";
import Div from "../../common/Div";
import ProductsSection from "../../products/productsSection";
import AdsSection from "../ads/adsSection";
import ShopByCategory from "../shopByCatigory/shopByCatigorySection";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <ShopByCategory/>
        <ProductsSection />
      </Div>
    </>
  );
};

export default HomePage;
