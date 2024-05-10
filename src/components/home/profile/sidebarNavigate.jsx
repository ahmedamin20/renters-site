import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTE } from '../../../utils/config/constantRoutes'

 const LocationContext = React.createContext();
export default function SidebarNavigate()  {
  const location = useLocation()
  return (
    <LocationContext.Provider value={location.pathname}>
      <div className='border border-gray-200 p-4  justify-start items-start flex flex-col gap-[10px] rounded-md shadow-md col-span-1 h-fit'>
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.PROFILE} text="Profile" />
        <CustomSidebarLink to={ROUTE.PROFILE_ROUTE.CHANGE_PASSWORD} text="Change Password" />
      </div>
    </LocationContext.Provider>
  )
}

 // import the context

const CustomSidebarLink = ({to, text})=>{
  const location = useContext(LocationContext); // use the context
  return(
    <Link className={`font-bold transition-all duration-[.2s] p-2 bg-transparent w-full text-start rounded-md ${location == to && "!bg-primary text-white"} hover:bg-primary hover:text-white`} to={to}>{text}</Link>
  )
}
