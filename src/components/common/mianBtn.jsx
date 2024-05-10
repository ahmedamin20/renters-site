import React from "react";
import { cn } from "../../utils/cn";

export default function MainButton({
  className,
  children,
  type,
  disabled,
  loading,
  isLoading,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        "group dark:bg-darkPrimary dark:shadow-md border border-red  bg-primary hover:bg-transparent transition-all hover:text-black font-medium w-fit  text-white dark:text-darkGrey rounded-lg p-[8px] text-[18px]",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center gap-[5px] justify-center mx-auto">
          <div className="animate-spin rounded-full h-[20px] w-[20px] border-b-2 group-hover:border-black border-white  dark:border-primary"></div>

        </div>
      ) : (
        children
      )}
    </button>
  );
}
