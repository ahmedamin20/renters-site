import React, { useRef } from 'react'
import TextInput from '../../common/textInput'

const Signup = () => {
    const IDClick = useRef()
  return (
    <>
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" for="username">Username</label>
                <TextInput id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
                <TextInput id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" for="password">Password</label>
                <TextInput id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                <TextInput id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Color</label>
                <TextInput id="color" type="color" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Gender</label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option disabled>select an option</option>
                    <option>female</option>
                    <option>female</option>
                </select>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Range</label>
                <TextInput id="range" type="range" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                <TextInput id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            {/*<div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Text Area</label>
                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
  </div>*/}
            
        </div>
        <div className='grid-cols-2mt-2'>
        <label className="block text-sm font-medium text-white">
        Image
      </label>
      <div className="mt-1  w-full justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span className="" onClick={()=>IDClick.current.click()}>Upload a file</span>
              <input type='file' accept='image/*' style={{display:"none"}} ref={IDClick}/>
              <TextInput id="file-upload" name="file-upload" type="file" className="sr-only"/>
            </label>
            <p className="pl-1 text-white">or drag and drop</p>
          </div>
          <p className="text-xs text-white">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>

 
    </>
  )
}

export default Signup
