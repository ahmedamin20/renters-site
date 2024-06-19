import React, { useRef, useState } from "react";
import defaultAPI from "../../api/axios";

const ContactUs = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // Handle form submission here
    await defaultAPI.post("/users/contact_us", formData);
    console.log("Form submitted:", ...formData);
  };

  return (
    <div className="w-full p-4">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>

      <div className="flex md:flex-row md:justify-between sm:flex-col p-2 gap-[10px]">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1718802839~exp=1718803439~hmac=aacb452c5d9a3ce41dc770cf884f34ab1fc13744f839866aecc06506a6791c8a"
            style={{ objectFit: "cover" }}
            className="animate-pulse duration-1000"
          />
        </div>
        <section className="w-1/2  rounded-md border shadow-md p-2">
          <div className="py-3 px-4 mx-auto max-w-screen-md">
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2  text-start text-sm font-bold text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Name"
                  required
                  name="name"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-start text-sm font-bold text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="email@exampel.com"
                  required
                  name="email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-start text-sm font-bold text-gray-900 dark:text-gray-300"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+20 123456789"
                  required
                  name="phone"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-start text-sm font-bold text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a Message..."
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 border-[10px] border-green text-sm bg-primary hover:shadow-none shadow-md transition-all duration-[500ms] hover:bg-transparent hover:border-primary hover:text-black text-white font-bold text-center rounded-lg sm:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
