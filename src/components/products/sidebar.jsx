import React from "react";
import ProductSidebarItem from "./sidebarItem";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { getCategories } from "../../api/queries/categories";

const ProductsSidebar = () => {
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.CATEGORIES],
    queryFn: getCategories,
  });
  return (
    <div class="sidebar  has-scrollbar" data-mobile-menu>
      <div class="sidebar-category">
        <div class="sidebar-top">
          <h2 class="sidebar-title">Category</h2>

          <button class="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul class="sidebar-menu-category-list">
          {data?.data?.map((item) => (
            <ProductSidebarItem
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
