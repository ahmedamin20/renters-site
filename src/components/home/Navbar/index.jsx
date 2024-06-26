import React, { useState } from 'react';
import { ROUTE } from '../../../utils/config/constantRoutes';
import { Link } from 'react-router-dom';
import Logout from '../../auth/logout';
import logo from "../../../assets/imgs/logoLight.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const navLinks = [
    {href:"/",content:"Home"},
    {href:ROUTE.ALL_PRODUCTS, content:"Products"},
    // {href:"/home",content:"About"},
    // {href:"/home",content:"Services"},
    {href:ROUTE.ContactUs,content:"Contact"},
]
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubDropdownToggle = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} loading='lazy' className="h-8 object-cover" alt="Renters Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Renters</span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navLinks.slice(0, 5).map((link, i) => {
            return (
                <li key={i}>
                <Link to={link.href} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{link.content}</Link>
              </li>
            );
          })}  
          
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={handleDropdownToggle}
              >
                Options
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" className={`z-10 ${isDropdownOpen ? 'absolute' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg right-6 shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link onClick={handleDropdownToggle} to={ROUTE.PROFILE_ROUTE.PROFILE} className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                    <button
                    id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleSubDropdownToggle}
                    >
                    Management
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <div id="doubleDropdown" className={`z-10 ${isSubDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <Link onClick={handleDropdownToggle} to={ROUTE.PROFILE_ROUTE.MY_PRODUCTS} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Products</Link>
                          </li>
                          <li>
                          <Link onClick={handleDropdownToggle} to={ROUTE.PROFILE_ROUTE.ADD_PRODUCTS} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Add Products</Link>
                          </li>
                          <li>
                          <Link onClick={handleDropdownToggle} to={ROUTE.PROFILE_ROUTE.INCOM_REQUSETS} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Incoming Requsets</Link>
                          </li>
                          <li>
                          <Link onClick={handleDropdownToggle} to={ROUTE.PROFILE_ROUTE.OUTCOM_REQUSETS} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Outcoming Requsets</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                  </li>
                </ul>
                <div className="py-1">
                <Logout />
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
