import React from "react";

const ProductSidebarItem = ({ name, img, id, onClick }) => {
  return (
    <li onClick={()=>onClick(id)} className="w-full flex hover:shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100  flex-row justify-center items-center gap-[5px]">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="flex flex-row justify-center items-center gap-[5px]">
          <img
            src={img}
            alt="icon"
            
            className="rounded-full w-[35px] h-[35px]"
          />

          <p className="menu-title">{name}</p>
        </div>
      </button>
    </li>
  );
};

export default ProductSidebarItem;
