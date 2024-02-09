import React from "react";
import AdsSection from "../ads/adsSection";
import Div from "../../common/Div";
import ProductCard from "../../common/productCard";
import CategoryBar from "../../common/CategoryBar";
import OneProductPage from "../../common/oneProduct/oneProductPage";

const HomePage = () => {
  return (
    <>
      <Div>
        <AdsSection />
        <CategoryBar />
        <ProductCard />
        <OneProductPage />
      </Div>
    </>
  );
};

export default HomePage;
