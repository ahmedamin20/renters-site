import React from "react";

const ProductSidebarItem = ({ name, img }) => {
  return (
    <li class="sidebar-menu-category">
      <button class="sidebar-accordion-menu" data-accordion-btn>
        <div class="menu-title-flex">
          <img
            src={img}
            alt="clothes"
            width="20"
            height="20"
            class="menu-title-img"
          />

          <p class="menu-title">{name}</p>
        </div>
      </button>
    </li>
  );
};

export default ProductSidebarItem;
