import { useQuery } from "@tanstack/react-query";
import React from "react";
import { API_ENDPOINTS } from "../../utils/config/constants";
import { getCategories } from "../../api/queries/categories";
import toast from "react-hot-toast";

const CategoryBar = () => {
  const categories = [
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
  ];
  const {data} = useQuery({
    queryKey:[API_ENDPOINTS.CATEGORIES],
    queryFn:getCategories
  })
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black dark:text-white font-bold text-4xl text-center">
        Our categories
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {data?.data?.map((item, index) => (
          <div
            key={index}
            className="bg-slate-300
            dark:bg-gray-900 text-black dark:text-white hover:dark:bg-darkPrimary hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
