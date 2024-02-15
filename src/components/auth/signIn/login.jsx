
import React from 'react'
import { DASHBOARD_NAME } from '../../../utils/config/constants'
import TextHead from '../../common/headText'
import SigninForm from './signInForm'
import FormContainer from '../formContainer'
import logoLight from "../../../assets/imgs/logoLight.png"
function Login() {
    return (
        <FormContainer>
            <div className='flex items-center justify-center text-center mx-auto  gap-[10px] w-full'>
                <TextHead className=' font-extrabold'><img width={"100px"} height={"100px"} src={logoLight}/></TextHead>
            </div>
            <TextHead>welcome to {DASHBOARD_NAME}</TextHead>
            <SigninForm />
        </FormContainer>
    )
}

export default Login