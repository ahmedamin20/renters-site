import { useMutation } from '@tanstack/react-query'
import React from 'react'
import TextInput from '../../common/textInput'
import PasswordInput from '../../common/passwordInput'
import { ACCESS_TOKEN } from '../../../utils/config/constants'
import MainButton from '../../common/mianBtn'
function SigninForm() {
    // const { isPending, mutate, isSuccess } = useMutation({
    //     mutationFn: signin,
    //     onSuccess: () => {
    //         localStorage.setItem(ACCESS_TOKEN, res.data.token)

    //         // router.replace(`/${locale}/common/dashboard`)
    //     }
    // })
    const onSubmit = (e) => {
        e.preventDefault()
        // mutate({
            console.log({email: e.target.email?.value,
                password: e.target.password?.value,
                fcm_token: '1234'})
        // })
    }
    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-[10px]'>
            <TextInput placeholder='Email' name='email' type='email' required={true} label='Email' />
            <PasswordInput placeholder='******' name='password' required={true} label='Password' />
            <MainButton isLoading={false} type='submit' className='w-full '>
                signin
            </MainButton>
        </form>
    )
}

export default SigninForm