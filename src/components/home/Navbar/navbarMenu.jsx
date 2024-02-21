import NavLink from "./navLink";

export default function NavMenu({
  visible,
  setNavOpen,
}) {
     const navLinks = [
        {href:"",content:""}
    ]
  return (
    <>
      <nav
        className={`transition-transform ${
          visible ? "scale-y-100" : "scale-y-0 delay-200"
        } origin-top duration-300 h-screen absolute top-full py-8 left-0 text-center bg-background dark:bg-foreground w-full z-50 flex flex-col font-medium`}
      >
        {navLinks.map((link, i) => {
          return (
            <NavLink
              onClick={() => setNavOpen(false)}
              key={i}
              href={link.href}
              className={`transition-opacity translated py-2 duration-300 ${
                visible ? `opacity-100 delay-300` : "opacity-0"
              }`}
            >
              {link.content}
            </NavLink>
          );
        })}
        <div
          className={`flex items-center justify-center mt-4 flex-wrap transition-opacity duration-200 ${
            visible ? `opacity-100 delay-300` : "opacity-0"
          }`}
        >
        </div>
      </nav>
    </>
  );
}