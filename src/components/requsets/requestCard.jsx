import React from 'react'
import RateStar from '../common/rateStar'
import CardHeader from './cardHeader'
import AcceptAndRejectFooter from '../common/acceptAndRejectFooter'
import { useMutation } from '@tanstack/react-query'
import { API_ENDPOINTS } from '../../utils/config/constants'
import { AcceptRequest, RejectRequest } from '../../api/queries/requests'

const RequestCard = () => {

  const {mutate:accept, isPending, isError, isSuccess} = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.ACCEPT_REQUEST,
    mutationFn:(id)=>AcceptRequest(id)
  
  }); 

  const {mutate:reject, isPending: rejectPending, isError: rejectError, isSuccess: rejectDone} = useMutation({
    mutationKey: API_ENDPOINTS.REQUESTS.REJECT_REQUEST,
    mutationFn:(id)=>RejectRequest(id)
  
  })
  return (
    <div className="min-w-[250px] my-3 mx-auto bg-itemsBgLight dark:bg-itemsBgDark rounded-lg overflow-hidden shadow-lg">
        <div className="border-b w-full">
          <CardHeader />
          <AcceptAndRejectFooter reject={reject} accept={accept}/>
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
