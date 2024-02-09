import React from "react";
import RateStar from "./rateStar";
import MainButton from "./mianBtn";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to="/product">
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-itemsBgLight dark:bg-itemsBgDark shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-itemsBgDark dark:text-white">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-itemsBgDark dark:text-white">
                $449
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
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
