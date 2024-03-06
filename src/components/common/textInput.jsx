import React, { useRef } from "react";


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
}) {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      
      hiddenFileInput.current.click();

    }
  };

  return (
    <div className="flex flex-col gap-[5px] my-2">
      {label && (
        <label className="text-[16px] font-bold text-start" htmlFor={name}>
          {label}
          {required && <span className="text-red"> *</span>}
        </label>
      )}
      <div className="relative">
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
            className={`bg-white text-left dark:bg-darkPrimary  dark:border-darkGrey font-bold text-[16px] w-full  ${
              icon ? "py-[12px] px-[30px]" : "p-[12px]"
            } border rounded-md focus:ring-0 dark:focus:ring-0 dark:focus:outline-darkPrimary   focus:outline-primary ${className}`}
          />
        ) : (
          <div>
            <button
              type="button"
              className={`border rounded-lg p-[13px] w-full "text-left`}
              onClick={handleClick}
            >
              <h1 className="rounded-md border p-[5px] w-fit dark:border-grey">
                {"chooseFile"}
              </h1>
            </button>
            <input
              type="file"
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
              ref={hiddenFileInput}
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