import React from 'react'

const AcceptAndRejectFooter = ({accept,reject}) => {
  return (
    <div className="flex gap-2 p-2">
            <button onClick={accept} className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Accept
            </button>
            <button onClick={reject} className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black hover:bg-rose-600 hover:text-white dark:text-white px-4 py-2">
              Reject
            </button>
          </div>
  )
}

export default AcceptAndRejectFooter
