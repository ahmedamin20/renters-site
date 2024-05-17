import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

function SelectMenu({
  className,
  name,
  options,
  value,
  setValue,
  defaultValue,
  label,
  showDefaultSelected = true,
}) {
  const [selected, setSelected] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const selectRef = useRef(null);
  
  useEffect(()=>{
    if(defaultValue)
      {
        setSelected(defaultValue)
      }
  },[defaultValue])
  return (
    <div>
      {label && <h1 className="mb-[8px] mr-[100%] font-semibold">{label}</h1>}
      
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => {
          setSelected(e.target.value);
          if (setValue) {
            setValue(e.target.value);
          }
        }}
        value={selected}
        ref={selectRef}
        className={cn(
          "w-full rounded-md dark:bg-dark p-[10px] text-dark dark:text-white focus:ring-0 focus:outline-primary border-grey border",
          className
        )}
      >
        {showDefaultSelected && (
          <option value="" disabled>
            {"choose an option"}
          </option>
        )}
        {options?.map((option) => (
          <option className="m-2" key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectMenu;
