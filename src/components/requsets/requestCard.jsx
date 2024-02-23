import React from 'react'
import RateStar from '../common/rateStar'
import CardHeader from './cardHeader'
import AcceptAndRejectFooter from '../common/acceptAndRejectFooter'

const RequestCard = () => {
  return (
    <div className="min-w-[350px] my-3 mx-auto bg-itemsBgLight dark:bg-itemsBgDark rounded-lg overflow-hidden shadow-lg">
        <div className="border-b w-full">
          <CardHeader/>
          <AcceptAndRejectFooter/>
        </div>
        <div className="px-4 py-4">
          <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
            <RateStar />
            <RateStar />
            <RateStar />
            <RateStar />
          </div>
        </div>
      </div>
  )
}

export default RequestCard
