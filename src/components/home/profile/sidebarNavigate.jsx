import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTE } from '../../../utils/config/constantRoutes'

 export const LocationContext = React.createContext();
export default function SidebarNavigate()  {
  const location = useLocation()
  return (
    <LocationContext.Provider value={location.pathname}>
      <div className='border border-gray-200 p-4  justify-start items-start flex flex-col gap-[10px] rounded-md shadow-md col-span-1 h-fit'>
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.PROFILE} text="Profile" />
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.CHANGE_PASSWORD} text="Change Password" />
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.MY_PRODUCTS} text="My Products" />
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.INCOM_REQUSETS} text="Icoming Request" />
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.OUTCOM_REQUSETS} text="Outcoming Request" />
      </div>
    </LocationContext.Provider>
  )
}

 // import the context

export const CustomSidebarLink = ({to, text})=>{
  const location = useContext(LocationContext); 
  return(
    <Link className={`font-bold cursor-pointer transition-all duration-[.2s] p-2 bg-transparent w-full text-start rounded-md ${location?.slice(8).includes(to.slice(8)) && "!bg-primary text-white"} hover:bg-primary hover:text-white`} to={to}>{text}</Link>
  )
}
