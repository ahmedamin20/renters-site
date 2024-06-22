import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const CardHeader = ({productImage, userName, productName}) => {
  return (
    <div className="text-center w-full">
            <div className='h-32 w-32 rounded-full flex border-4  mx-auto my-4 border-white'>
            <img
              className=" w-full h-full object-cover rounded-md "
              src={productImage}
              alt=""
            />
            </div>
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                {productName}
              </h3>
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                <FaUserAlt className='w-5 h-5 text-gray-400 dark:text-gray-600 mr-1' />
                {userName}
                </div>
            </div>
          </div>
  )
}

export default CardHeader
