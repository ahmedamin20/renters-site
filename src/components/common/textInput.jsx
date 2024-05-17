import React, { useRef } from "react";
import { cn } from "../../utils/cn";


function TextInput({
  className,
  rest,
  value,
  defaultValue,
  required = false,
  type,
  placeholder,
  name,
  label,
  icon,
  onChange,
  onClick,
  disabled,
  multiple,
  ref
}) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
      
      hiddenFileInput.current.click();

    
  };

  return (
    <div className="flex flex-col gap-[5px] my-2">
      {label && (
        <label className="before:content[' '] before:border-2 before:border-gray-400 text-[16px] font-bold text-start" htmlFor={name}>
          {placeholder || label}
          {required && <span className="text-red"> *</span>}
        </label>
      )}
      <div className="">
        {type !== "file" ? (
          <input
            disabled={disabled}
            onClick={onClick}
            {...rest}
            onChange={onChange}
            multiple={multiple}
            value={value}
            defaultValue={defaultValue}
            required={required}
            // onInvalid={(F) =>
            //   F.currentTarget.setCustomValidity(
            //     `${
            //       locale == "ar"
             //         ? "هذا الحقل مطلوب"
            //         : "This field is required"
            //     }`
            //   )
            // }
            onInput={(F) => F.currentTarget.setCustomValidity("")}
            type={type}
            min={type === "number" && 0}
            name={name}
            placeholder={placeholder}
            className={`bg-white text-left dark:bg-darkPrimary  dark:border-darkGrey font-bold text-[16px]  ${
              icon ? "py-[12px] px-[30px]" : "p-[12px]"
            } border rounded-md focus:ring-0 dark:focus:ring-0 dark:focus:outline-darkPrimary   focus:outline-primary ${className}`}
          />
        ) : (
          <div>
            <button
              type="button"
              onClick={handleClick}
              className={`border rounded-lg p-[13px] text-left`}
            >
              <h1 className={cn("rounded-md border p-[5px] w-fit dark:border-grey", className)}>
                {"chooseFile"}
              </h1>
            </button>
            <input
              ref={hiddenFileInput}
              type="file"
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
              style={{ display: "none" }}
              multiple={multiple}
            />
          </div>
        )}
        {icon && (
          <div className="absolute top-[14px] left-[6px]">{icon}</div>
        )}
      </div>
    </div>
  );
}

export default TextInput;