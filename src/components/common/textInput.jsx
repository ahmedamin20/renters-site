import React from "react";
import { cn } from "../../utils/cn";

function TextInput({
  className,
  rest,
  value,
  defaultValue,
  required = false,
  type = "text",
  placeholder,
  name,
  label,
  icon,
  onChange,
  onClick,
  disabled,
}) {
  return (
    <div className="flex flex-col gap-[5px]">
      {label && <label className=" text-[16px] font-medium">{label}</label>}
      <div className=" relative">
        <input
          disabled={disabled}
          onClick={onClick}
          {...rest}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(
            `bg-white dark:bg-darkPrimary dark:border-darkGrey font-medium text-[16px] w-full  ${
              icon ? "py-[12px] px-[30px]" : "p-[12px]"
            } border rounded-md focus:ring-0 dark:focus:ring-0 dark:focus:outline-darkPrimary   focus:outline-primary`,
            className
          )}
        />
        {icon && <div className=" absolute top-[14px] left-[6px]">{icon}</div>}
      </div>
    </div>
  );
}

export default TextInput;
