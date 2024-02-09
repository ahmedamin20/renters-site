import React from "react";
import { cn } from "../../utils/cn";

function TextHead({ className, children }) {
  return (
    <h1 className={cn(" font-semibold text-[20px] ", className)}>{children}</h1>
  );
}

export default TextHead;
