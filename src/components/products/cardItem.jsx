import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import { ROUTE } from "../../utils/config/constantRoutes";
import Modal from "../popupForm";

const CardItem = ({ image, name, price, desc, id, isMyProduct }) => {
  const location = window.location.pathname
  console.log(location)
  return (
   <div className="flex flex-col gap-[15px] border rounded-sm shadow-md">
   <Link to={`/product/${id}`}>
   <div className="showcase" style={{ height: "250px" }}>
     <div className="showcase-banner">
       <img
         style={{
           width: "200px",
           height: "180px",
         }}
         loading="lazy"
         src={image}
         alt="img"
         className="product-img default"
         width="300"
         height="200"
       />
       <img
         loading="lazy"
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

     <div className="showcase-content ">
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
      location == ROUTE.PROFILE_ROUTE.MY_PRODUCTS && (isMyProduct == true) && (
        <div className="flex flex-row gap-[20px] mb-2 mx-2">
          <Button to={`${ROUTE.PROFILE_ROUTE.EDIT_PRODUCTS}/${id}`} className2={"text-green"} className={"bg-green"} text={"Edit"}/>
          <Modal innerBtnText={"yes"} onClick={()=>console.log("dleete", id)} className={"bg-red hover:bg-red"} text={"Delete"}>
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
