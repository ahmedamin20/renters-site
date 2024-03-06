"use client";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
function PasswordInput({
  className,
  rest,
  value,
  defaultValue,
  required = false,
  placeholder,
  name,
  label,
}) {
  const [type, setType] = useState("password");
  return (
    <div className="flex flex-col gap-[5px]">
    {label && (
      <label className="text-[16px] font-bold text-start" htmlFor={name}>
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
    )}
    <div className=" relative">
        <input
          {...rest}
          value={value}
          defaultValue={defaultValue}
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`bg-white dark:focus:ring-0 dark:focus:outline-darkPrimary   dark:bg-darkPrimary dark:border-darkGrey text-secondary font-medium text-[16px] w-full  p-[12px]  border rounded-md focus:ring-0   focus:outline-primary ${className}`}
        />
        <div className=" absolute right-[10px] text-grey top-[14px]">
          {type === "password" ? (
            <BsEye
              size={20}
              className=" cursor-pointer"
              onClick={() => setType("text")}
            />
          ) : (
            <BsEyeSlash
              className=" cursor-pointer"
              size={20}
              onClick={() => setType("password")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;
