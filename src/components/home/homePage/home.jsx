import React from "react";
import CtegoriesSection from "../../categories/categoriesSection";
import Div from "../../common/Div";
import ProductsSection from "../../products/productsSection";
import AdsSection from "../ads/adsSection";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <CtegoriesSection />
        <ProductsSection />
      </Div>
    </>
  );
};

export default HomePage;
