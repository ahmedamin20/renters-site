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
   
    <Link to={`/product/${id}`} className={`sm:w-full my-2 rounded-md ${location == ROUTE.PROFILE_ROUTE.MY_PRODUCTS.trim() && (isMyProduct == true) ? "h-[450px]": "h-[350px]"} hover:shadow-xl transition-all duration-500 bg-gray-100 md:w-[30%]`}>
    <Link to={`/product/${id}`}>
    <img className="rounded-md object-cover h-[200px]" style={{width:"100%"}} src={image} alt="" />
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
      
    </div>
    {
      location == ROUTE.PROFILE_ROUTE.MY_PRODUCTS.trim() && (isMyProduct == true) && (
        <div className="flex flex-row gap-[20px] mb-2 mx-auto w-fit">
        <Button to={`${editPath}/${id}`} className2={"text-green"} className={"bg-green"} text={"Edit"}/>
        <Modal disable={isPending} innerBtnText={"yes"} onClick={()=>mutate(id)} className={"bg-red hover:bg-red"} text={"Delete"}>
            <div className="flex flex-col gap-[20px]">
              <h1>Are you sure you want to delete this product?</h1>
            </div>
          </Modal>
          </div>
      )
    }
   </Link>
  );
};

export default CardItem;
