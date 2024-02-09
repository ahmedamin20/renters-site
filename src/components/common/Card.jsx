import React from "react";
import { cn } from "../../utils/cn";

function Card({ className, children }) {
  return (
    <div
      className={cn(
        " rounded-md shadow-md bg-white dark:bg-darkPrimary p-[20px] flex flex-col  gap-[15px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
