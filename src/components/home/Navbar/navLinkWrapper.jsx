import { ROUTE } from "../../../utils/config/constantRoutes";
import NavLink from "./navLink";

export default function NavLinksWrapper() {
  const navLinks = [
    {href:"/home",content:"Home"},
    {href:"/home",content:"About"},
    // {href:"/home",content:"Services"},
    {href:"/home",content:"Products"},
    {href:ROUTE.ContactUs,content:"Contact"},
]
  return (
    <nav
      className="items-center font-medium hidden sm:flex rtl:flex-row"
    >
      {navLinks.slice(0, 5).map((link, i) => {
        return (
          <NavLink
            key={i}
            exact={link.href === "/"}
            href={link.href}
            className="translated dark:text-white px-4 md:px-6 lg:px-10 linkWithLine"
          >
            <span>{link.content}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}