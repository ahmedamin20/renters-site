import { useState } from "react";
import NavMenu from "./navbarMenu";
import { useTheme } from "../../../utils/providers/theme";
import Logo from "./logo";
import NavCTA from "./navBarCTA";
import NavLinksWrapper from "./navLinkWrapper";

import { API_ENDPOINTS } from "../../../utils/config/constants";
import { getProfile } from "../../../api/queries/profile";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../spinner";
import ProfileLink from "../profile/profileLink";
import Logout from "../../auth/logout";
import { Link } from "react-router-dom";
import ProfileItem from "./profileItems";

export default function NewNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme } = useTheme();
  const [profile, setProfile] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [API_ENDPOINTS.PROFILE],
    queryFn: () => getProfile(),
  });
  console.log(data, "proffffff");
  return (
    <header
      className={`dark:bg-foreground/50 h-20 flex items-center backdrop-blur-md !sticky top-0 z-50`}
    >
      <div className="flex font-cairo items-center px-3 py-5 container mx-auto justify-between relative">
        <div className="flex items-center gap-2 sm:gap-0">
          {/*<NavMenuToggle navOpen={navOpen} setNavOpen={setNavOpen} />*/}
          <Logo />
        </div>
        <NavLinksWrapper />
        <NavCTA />
        <NavMenu visible={navOpen} setNavOpen={setNavOpen} />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex relative">
            {isLoading ? (
              <Spinner />
            ) : (
              <img
                className="cursor-pointer rounded-full"
                onClick={() => {
                  setProfile(!profile);
                }}
                width={50}
                height={50}
                alt=""
                src={data?.data?.avatar}
              />
            )}

            {profile && (
              <div
                className="flex flex-col justify-center gap-[15px] shadow-lg absolute top-9 right-2 w-[250px] h-auto text-black dark:text-darkGrey bg-white dark:bg-darkPrimary p-[15px] rounded-xl"
                onClick={() => {
                  setProfile(!profile);
                }}
              >
                <ProfileLink
                  image={data?.data?.avatar}
                  name={data?.data?.name}
                  email={data?.data?.email}
                />
                <ProfileItem title="Add Your Product" path="/productForm"/>
                <Logout />
              </div>
            )}
          </div>
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
