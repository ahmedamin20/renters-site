import React from "react";
import RateStar from "../common/rateStar";
import MainButton from "../common/mianBtn";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <div className="relative mx-6 my-2 h-[500px] flex  flex-col overflow-hidden rounded-lg bg-itemsBgLight dark:bg-itemsBgDark shadow-md">
        <span
          className="relative mx-2 mt-2 flex h-60 overflow-hidden rounded-xl"
        >
          <img
            className="object-cover"
            src={product.main_image}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full flex flex-wrap bg-black px-2 text-center text-sm font-medium text-white">
            max:{product.maximum_days} | min: {product.minimum_days} | Health: {product.health}% | User: {product.user.name}
          </span>
        </span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-itemsBgDark dark:text-white">
              {product.name}
            </h5>
            <hr className="my-2"/>
            <h5 className="text-sm tracking-tight text-grey dark:text-white">
              {product.description}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-itemsBgDark dark:text-white">
                ${product.price}
              </span>
              <span className="text-sm text-itemsBgDark dark:text-white line-through">
                $699
              </span>
            </p>
            
            <div className="flex items-center">
              <RateStar />
              <RateStar />
              <RateStar />
            </div>
          </div>
          <MainButton className={"w-full"}>
            <div className="flex w-full justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Rent
            </div>
          </MainButton>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
