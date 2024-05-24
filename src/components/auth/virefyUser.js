import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { verifyUser } from '../../api/queries/auth';
import toast from 'react-hot-toast';

const useVirefyUser = (formRef) => {
    const {mutate, isPending} = useMutation({
        mutationFn: (data)=>  verifyUser(data),
        onError:(err)=> toast.error(err.message),
        onSuccess:(res)=> toast.success(res)
    })
  const handleVirefyUser = () => {
    if (formRef?.current) {
      const formData = new FormData(formRef.current);
      const code = formData.get('code');
      const email = formData.get('handle');
        mutate({code, email})
    }
  };
  

  return { handleVirefyUser, isPending };
};

export default useVirefyUser;