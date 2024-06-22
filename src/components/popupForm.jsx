import React, { useState } from 'react';
import { cn } from '../utils/cn';

const Modal = ({disable, children, action, text, innerBtnText, onClick, className, open }) => {
  const [isOpen, setIsOpen] = useState(false || open);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = ()=> {
    onClick()?.then(()=>{

      toggleModal()
    })
  }

  // ${innerBtnText == "Verify" && "hidden"}
  return (
    <>
      <button
        onClick={toggleModal}
        className={cn(`block text-white  bg-primary transition-all  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`, className)}
        type="button"
      >
        {text}
      </button>

      {open || isOpen  && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full shadow-2xl overflow-y-auto overflow-x-hidden"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-2xl">
              <button
                type="button"
                onClick={toggleModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5">
                {children}
                <div className='w-full mt-[2rem] justify-center flex flex-row mx-auto '>
                <button onClick={handleClick} disabled={disable} type={action || "submit" } className="bg-blue-700 shadow-lg  hover:bg-blue-800 py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none bg-blue rounded-lg border border-gray-200 text-white transition-all focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                   {innerBtnText}
                </button>
                <button onClick={toggleModal} type="button" className=" shadow-lg py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none hover:text-black bg-red rounded-lg border border-gray-200 text-white hover:bg-gray-100 transition-all focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
