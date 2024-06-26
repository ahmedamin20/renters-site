import React from "react";
import { cn } from "../../utils/cn";

function Div({ className, children }) {
  return (
    <div className={cn("flex flex-col", className)}>{children}</div>
  );
}

export default Div;
