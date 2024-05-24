import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoLight from "../../../assets/imgs/logoLight.png";
import { DASHBOARD_NAME } from "../../../utils/config/constants";
import TextHead from "../../common/headText";
import TextInput from "../../common/textInput";
import Modal from "../../popupForm";
import FormContainer from "../formContainer";
import useVirefyUser from "../virefyUser";
import SignUpForm from "./signup";

const SignupForm = () => {
  const formRef = useRef(null)
  const { handleVirefyUser, isPending } = useVirefyUser(formRef);
  
  return (
    <div
      style={{
        backgroundImage: `url("/bg.jpg")`,
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundPosition: "center",
      }}
    >
      <FormContainer>
        <div className="flex items-center justify-center text-center mx-auto  gap-[10px] w-full">
          <TextHead className=" font-extrabold">
            <img width={"100px"} height={"100px"} src={logoLight} />
          </TextHead>
        </div>
        <TextHead>welcome to {DASHBOARD_NAME}</TextHead>
        <SignUpForm />
        <div className="flex justify-evenly items-center gap-[20px]">
        <Link className="my-4" to={"/"}>
          Are you one of us?
        </Link>

        <Modal disable={isPending} onClick={handleVirefyUser} innerBtnText={"Verify"} text={"Verify Your Account"}>
        <form ref={formRef}>
        <TextInput placeholder='Email' name='handle' type='email' required={true} label='email' />
        <TextInput placeholder='Code' name='code' type='code' required={true} label='code' />
        </form>
        </Modal>

        </div>
      </FormContainer>
    </div>
  );
};

export default SignupForm;
