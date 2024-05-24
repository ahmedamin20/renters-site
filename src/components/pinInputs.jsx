import React, { useRef } from 'react';

const PinInput = ({name, onChange}) => {
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const handleInputChange = () => {
    const pinValue = inputRefs.current.map(ref => ref.current.value).join('');
    onChange(name, pinValue);
  };
  return (
    <div className="flex space-x-3 mx-auto w-fit my-7" data-hs-pin-input="">
    {inputRefs.current.map((ref, index) => (
      <input
        key={index}
        type="text"
        name={name}
        className="block w-[38px] text-center border-[2px] py-2 focus:outline-primary border-gray-200 rounded-md text-sm focus:border-blue-500 peer-focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
        placeholder="⚬"
        data-hs-pin-input-item=""
        ref={ref}
        maxLength={1}
        onChange={handleInputChange}
      />
    ))}
     
    </div>
  );
};

export default PinInput;
