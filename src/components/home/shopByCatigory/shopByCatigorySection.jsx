import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { API_ENDPOINTS } from '../../../utils/config/constants';
import { getCategories } from '../../../api/queries/categories';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../utils/config/constantRoutes';

const ShopByCategory = () => {
    const { data, isPending } = useQuery({
        queryKey: [API_ENDPOINTS.CATEGORIES],
        queryFn: getCategories,
      });
    if(isPending) return <p className='animate-bounce font-bold'>Loading...</p>
    const category = data?.data;
  return (
    <div className='max-h-[1000px] overflow-hidden'>
    <div className="flex justify-center p-8  tems-center">
      <div className="2xl:mx-auto xl:container  px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
              Shop By Category
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4  w-full">
            <div className="relative group flex justify-center items-center h-[50%] w-full">
              <img
                className="object-center object-cover h-full w-full"
                // src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                src={category[4]?.image}
                alt="girl-image"
              />
              <Link to={`/products/category/${category[4].id}`} onClick={()=> console.log(category[4]?.id)} className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                {category[4]?.name}
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>

            <div className="flex flex-col space-y-4 h-[45%]  md:space-y-8 mt-4 md:mt-0">
              <div className="relative group flex justify-center bg-black-500 items-center h-[50%] w-full">
                <img
                  className="object-center object-cover h-full  w-full"
                //   src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                  src={category[0]?.image}
                  alt="shoe-image"
                />
                <Link to={`/products/category/${category[0].id}`} onClick={()=>console.log(category[0]?.id)} className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  {category[0]?.name}
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div className="relative group flex justify-center items-center h-[50%] w-full">
                <img
                  className="object-center object-cover h-full w-full"
                //   src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                  src={category[1]?.image}
                  alt="watch-image"
                />
                <Link to={`/products/category/${category[1].id}`} onClick={()=>console.log(category[1]?.id)} className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  {category[1]?.name}
                </Link>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>

            <div className="relative group justify-center items-center h-[50%] w-full hidden lg:flex">
              <img
                className="object-center object-cover h-full w-full"
                // src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                src={category[2]?.image}
                alt="girl-image"
              />
              <Link to={`/products/category/${category[2].id}`} onClick={()=>console.log(category[2]?.id)} className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                {category[2]?.name}
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShopByCategory;
