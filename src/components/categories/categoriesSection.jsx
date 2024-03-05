import React from 'react'
import "./categoriesStyle.css"
import CategoryItem from './categoryItem';
import { API_ENDPOINTS } from '../../utils/config/constants';
import { getCategories } from '../../api/queries/categories';
import { useQuery } from '@tanstack/react-query';
const CtegoriesSection = () => {
  const {data} = useQuery({
    queryKey:[API_ENDPOINTS.CATEGORIES],
    queryFn:getCategories
  })
  console.log(data,"catrttttttt")
    // const data = [
    //     {
    //       id: 1,
    //       name: "Fast Food",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    //     },
    //     {
    //       id: 2,
    //       name: "Pizza",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    //     },
    //     {
    //       id: 3,
    //       name: "Wings",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    //     },
    //     {
    //       id: 4,
    //       name: "Indian",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Latest Deals",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    //     },
    //     {
    //       id: 6,
    //       name: "Restaurant Rewards",
    //       image:
    //         "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    //     },
    //   ];
   return(
      <div class="category">

            <div class="container">

                <div class="category-item-container has-scrollbar">
                
                {data?.data?.map(item=>(
                  <CategoryItem name={item?.name} img={item.image} key={item.id}/>
                ))}
                
                </div>
                </div>
                </div>

  )
}

export default CtegoriesSection
