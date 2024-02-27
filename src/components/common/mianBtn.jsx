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
        " dark:bg-darkPrimary dark:shadow-md bg-primary font-medium w-fit  text-white dark:text-darkGrey rounded-lg p-[8px] text-[18px]",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center gap-[5px] justify-center mx-auto">
          <div className="animate-spin rounded-full h-[32px] w-[32px] border-b-2 border-white  dark:border-primary"></div>

          {"loading"}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
