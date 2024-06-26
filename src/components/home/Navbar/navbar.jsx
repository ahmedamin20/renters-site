import { useState } from "react";
import Logo from "./logo";
import NavCTA from "./navBarCTA";
import NavLinksWrapper from "./navLinkWrapper";
import NavMenu from "./navbarMenu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../api/queries/profile";
import { API_ENDPOINTS } from "../../../utils/config/constants";
import Logout from "../../auth/logout";
import Spinner from "../../spinner";
import ProfileLink from "../profile/profileLink";
import ProfileItem from "./profileItems";
import ProfileMenu from "./profileMenu";

export default function NewNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.PROFILE],
    queryFn: () => getProfile(),
  });
  return (
    <header
      className={`h-full w-full bg-blue-400 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
    >
      <div className="flex !w-[85%] font-cairo items-center px-3 py-5 container !mx-auto justify-between relative">
        <div className="flex items-center gap-2 sm:gap-0">
          <Logo />
        </div>
        <NavLinksWrapper />
        <NavCTA />
        <NavMenu visible={navOpen} setNavOpen={setNavOpen} />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {/*----------------profile------------*/}
          <div className="w-[50px] h-[50px] flex justify-center flex-col bg-red rounded-full">
            <div onClick={()=>setProfile(!profile)} className="w-full h-full flex justify-center rounded-full">
              <img src={data?.data?.avatar} className="object-cover w-full h-full rounded-full"/>
            </div>
          </div>
          <ProfileMenu profile={profile} data={data} setProfile={setProfile}/>
          {/*----------------responsive------------*/}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


{/*<div
          className="z-50 hidden text-base list-none divide-y divide-gray-100 rounded-lg shadow  dark:divide-gray-600"
          id="user-dropdown"
          >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
</div>*/}