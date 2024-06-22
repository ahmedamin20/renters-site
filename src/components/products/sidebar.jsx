import React from "react";
import ProductSidebarItem from "./sidebarItem";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { getCategories } from "../../api/queries/categories";

const ProductsSidebar = ({setSelected, selected}) => {
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.CATEGORIES],
    queryFn: getCategories,
  });
  
  return (
    <div className="flex flex-col p-1" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Categories</h2>

          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          {data?.data?.map((item) => (
            <ProductSidebarItem
              onClick={()=>setSelected(item.id)}
              id={item.id}
              name={item.name}
              img={item.image}
              key={item?.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsSidebar;
