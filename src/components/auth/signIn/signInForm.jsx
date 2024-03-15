import { useMutation } from '@tanstack/react-query'
import React, { useRef } from 'react'
import TextInput from '../../common/textInput'
import PasswordInput from '../../common/passwordInput'
import { ACCESS_TOKEN } from '../../../utils/config/constants'
import MainButton from '../../common/mianBtn'
import { useNavigate } from 'react-router-dom'
import defaultAPI from '../../../api/axios'
function SigninForm() {
    const formRef = useRef()
    const navigate = useNavigate()
    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: ({ email, password }) => defaultAPI.post('/auth/login/mobile', {
            email,
            password,
            fcm_token: "121232" || 'no token found'
        }),
        onSuccess: (res) => {
            localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
            navigate("/home");
            window.location.reload()
        },
        onError: (error) => {
            console.error("Sign-in error:", error);
        }
    });
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current);
        const email = formData.get('email');
        const password = formData.get('password');
        mutate({ email, password });
    }
    
    return (
        <form ref={formRef} onSubmit={onSubmit} className='flex flex-col gap-[10px]'>
            <TextInput placeholder='Email' name='email' type='email' required={true} label='Email' />
            <PasswordInput  placeholder='******' name='password' required={true} label='Password' />
            <MainButton isLoading={isPending} type='submit' className='w-full '>
                signin
            </MainButton>
        </form>
    )
}

export default SigninForm