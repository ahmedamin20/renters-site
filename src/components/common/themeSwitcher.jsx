import React from "react";

import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../utils/providers/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme, "theme");

  return (
    <button className={``} onClick={toggleTheme}>
      {theme === "light" ? (
        <MdOutlineDarkMode className="text-black text-[20px] sm:text-[30px]" />
      ) : (
        <MdLightMode className="text-white text-[20px] sm:text-[30px]" />
      )}
    </button>
  );
};
