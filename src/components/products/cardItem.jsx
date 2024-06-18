import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import { ROUTE } from "../../utils/config/constantRoutes";
import Modal from "../popupForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getMyProducts } from "../../api/queries/myProducts";

const CardItem = ({ image, name, price, desc, id, isMyProduct }) => {
  const location = window.location.pathname;
  const {mutate, isPending} = useMutation({
    mutationFn: (id)=>deleteProduct(id),
    onSuccess: ()=>getMyProducts()
  })
  let editPath = ROUTE.PROFILE_ROUTE.EDIT_PRODUCTS;
  let parts = editPath.split('/');
  parts = parts.slice(0, parts.length - 1);
  editPath = parts.join('/');

  return (
   
    <div className="max-w-sm hover:shadow-md transition-all bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/product/${id}`}>
    <img className="rounded-t-lg " style={{width:"100%"}} src={image} alt="" />
    <h6 className="font-bold">{price}/day</h6>
    </Link>
    <div className="p-5">
      <Link to={`/product/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
      {!isMyProduct && <Link
        to={`/product/${id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
      Rent
      <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    }
    </div>
    {
      location == ROUTE.PROFILE_ROUTE.MY_PRODUCTS.trim() && (isMyProduct == true) && (
        <div className="flex flex-row gap-[20px] mb-2 mx-2">
        <Button to={`${editPath}/${id}`} className2={"text-green"} className={"bg-green"} text={"Edit"}/>
        <Modal disable={isPending} innerBtnText={"yes"} onClick={()=>mutate(id)} className={"bg-red hover:bg-red"} text={"Delete"}>
            <div className="flex flex-col gap-[20px]">
              <h1>Are you sure you want to delete this product?</h1>
            </div>
          </Modal>
          </div>
      )
    }
   </div>
  );
};

export default CardItem;
