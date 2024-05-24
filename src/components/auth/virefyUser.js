import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { verifyUser } from '../../api/queries/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useVirefyUser = (formRef) => {
    const navigate = useNavigate()
    const {mutate, isPending} = useMutation({
        mutationFn: (data)=>  verifyUser(data),
        onError:(err)=> toast.error(err.message),
        onSuccess:(res)=> {
            toast.success(res?.message)
            navigate('/')
        }
    })
  const handleVirefyUser = () => {
    if (formRef?.current) {
      const formData = new FormData(formRef.current);
      const code = formData.get('code');
      const handle = formData.get('handle');
        mutate({code, handle})
    }
  };
  

  return { handleVirefyUser, isPending };
};

export default useVirefyUser;