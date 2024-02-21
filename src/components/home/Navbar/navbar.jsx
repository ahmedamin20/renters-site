import { useState } from "react";
import NavMenu from "./navbarMenu";
import { useTheme } from "../../../utils/providers/theme";
import Logo from "./logo";
import NavCTA from './navBarCTA';
import NavLinksWrapper from './navLinkWrapper';
import NavMenuToggle from "./navbarMenuToggle";

export default function NeqNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const {theme} = useTheme()
  return (
    <header className={`dark:bg-foreground/50 h-20 flex items-center backdrop-blur-md !sticky top-0 z-50`}>
      <div className="flex font-cairo items-center px-3 py-5 container mx-auto justify-between relative">
        <div className="flex items-center gap-2 sm:gap-0">
          {/*<NavMenuToggle navOpen={navOpen} setNavOpen={setNavOpen} />*/}
          <Logo />
        </div>
        <NavLinksWrapper />
        <NavCTA />
        <NavMenu visible={navOpen} setNavOpen={setNavOpen} />
      </div>
    </header>
  );
}