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
    
   return(
      <div class="category relative -top-[100px]">

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
