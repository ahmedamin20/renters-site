import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../api/queries/products";
import { API_ENDPOINTS } from "../../../utils/config/constants";

const ProductsSection = () => {
  const { data: productsData } = useQuery({
    queryKey: [API_ENDPOINTS.PRODUCTS],
    queryFn: () => getAllProducts(),
  });

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        We have Alotof Products To rent
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData?.data.map((product, index) => (
          <Link
            to={`/product/${product.id}`}
            key={index}
            className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img
                src={product.main_image}
                alt={"image"}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">
                  {product.price}EGP/ day
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
