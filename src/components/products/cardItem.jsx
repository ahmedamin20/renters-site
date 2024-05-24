import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import { ROUTE } from "../../utils/config/constantRoutes";
import Modal from "../popupForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getMyProducts } from "../../api/queries/myProducts";

const CardItem = ({ image, name, price, desc, id, isMyProduct }) => {
  const location = window.location.pathname;
  const {invalidateQueries} = useQueryClient()
  const {mutate, isPending} = useMutation({
    mutationFn: (id)=>deleteProduct(id),
    onSuccess: ()=>invalidateQueries("getMyProducts")
  })
  let editPath = ROUTE.PROFILE_ROUTE.EDIT_PRODUCTS;
  let parts = editPath.split('/');
  parts = parts.slice(0, parts.length - 1);
  editPath = parts.join('/');
  console.log(editPath);
  return (
   <div className="flex flex-col gap-[10px] border rounded-sm shadow-md">
   <Link to={`/product/${id}`}>
   <div className="showcase" style={{ height: "250px" }}>
     <div className="showcase-banner">
       <img
         style={{
           width: "200px",
           height: "180px",
         }}
         src={image}
         alt="img"
         className="product-img default"
         width="300"
         height="200"
       />
       <img
         style={{
           width: "200px",
           height: "180px",
         }}
         src={image}
         alt="img"
         className="product-img hover"
         width="300"
       />
     </div>

     <div className="showcase-content">
       <a href="#" className="showcase-category">
         {name}
       </a>

       <div className="price-box">
         <p className="price">{price}EGP</p>
       </div>
     </div>
   </div>
    </Link>
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
