
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
            {/* <div className='flex gap-[5px]'>
                <p className=' border-b w-full mb-[10px]'></p>
                <p className=''>{t('or')}</p>
                <p className=' border-b w-full mb-[10px]'></p>
            </div> */}
            {/* <MainLink className=' w-full text-center bg-green' href='/auth/signup'>
                {t('signup')}
            </MainLink> */}
        </FormContainer>
    )
}

export default Login