import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";

export default function NavMenuToggle({
  navOpen,
  setNavOpen,
}) {
  return (
    <button className="flex me-2" onClick={() => setNavOpen((prev) => !prev)}>
      {navOpen ? (
        <AiOutlineClose className={"text-foreground dark:text-background"} />
      ) : (
        <CiMenuBurger className={"text-foreground dark:text-background"} />
      )}
    </button>
  );
}