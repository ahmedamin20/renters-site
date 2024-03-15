import React from 'react'
import SignUpForm from './signup'
import FormContainer from '../formContainer'
import TextHead from '../../common/headText'
import logoLight from "../../../assets/imgs/logoLight.png"
import { DASHBOARD_NAME } from '../../../utils/config/constants'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  return (
    <div style={{backgroundImage:`url("/bg.jpg")`,  minHeight:"100vh",minWidth:"100vw", backgroundPosition:"center"}}>
    <FormContainer>
    <div className='flex items-center justify-center text-center mx-auto  gap-[10px] w-full'>
    <TextHead className=' font-extrabold'><img width={"100px"} height={"100px"} src={logoLight}/></TextHead>
            </div>
            <TextHead>welcome to {DASHBOARD_NAME}</TextHead>
            <SignUpForm />
            <Link className='my-4' to={"/"}>Are you one of us?</Link>
            </FormContainer>
            </div>
            )
        }
        
export default SignupForm
