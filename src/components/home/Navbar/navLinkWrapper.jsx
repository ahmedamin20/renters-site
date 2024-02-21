import NavLink from "./navLink";

export default function NavLinksWrapper() {
  const navLinks = [
    {href:"/",content:"Home"},
    {href:"/",content:"About"},
    {href:"/",content:"Services"},
    {href:"/",content:"Products"},
    {href:"/",content:"Contact"},
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