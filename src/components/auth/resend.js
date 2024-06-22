import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { resendCode } from '../../api/queries/auth';

const useResend = (formRef) => {
    const {mutate, isPending} = useMutation({
        mutationFn: (data)=>  resendCode(data),
        onError:(err)=> toast.error(err.message),
        onSuccess:(res)=> {
            toast.success(res?.message)
        }
    })
  const handleResend = () => {
    if (formRef?.current) {
      const formData = new FormData(formRef.current);
      const handle = formData.get('handle');
        mutate({code, handle})
    }
  };
  

  return { handleResend, isPending };
};

export default useResend;