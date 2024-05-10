import React, { useRef } from 'react'
import MainButton from '../../common/mianBtn'
import TextHead from '../../common/headText'
import PasswordInput from '../../common/passwordInput'
import { useMutation } from '@tanstack/react-query'
import {updatePassword } from "../../../api/queries/profile"
const PasswordForm = () => {
  const passWordRef = useRef(null);

  const { mutate: passwordUpdate, isPending: isPasswordLoading } = useMutation({
    mutationFn: updatePassword,
    onSuccess(data, variables, context) {},
  });

  

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(passWordRef.current);
    const formObject = Object.fromEntries(formData.entries());
    passwordUpdate(formObject);
  };
  return (
    <form
        ref={passWordRef}
        className=" gap-10 w-full justify-center mt-[25px]"
        onSubmit={handlePasswordSubmit}
      >
      <h2 className="text-start font-bold text-[20px]">User Profile</h2>

        <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          <PasswordInput
            name="old_password"
            required={true}
            placeholder="Old Password"
            label="Old Password"
          />
          <PasswordInput
            name="New Password"
            required={true}
            placeholder="New Password"
            label="New Password"
          />
          <PasswordInput
            name="New Password Confirmation"
            required={true}
            placeholder="New Password Confirmation"
            label="New Password Confirmation"
            className={"col-span-3"}
          />
        </div>
        <MainButton
          isLoading={isPasswordLoading}
          type="submit"
          className="form-submit-button w-[50%] m-8 mx-auto"
        >
          update
        </MainButton>
      </form>
  )
}

export default PasswordForm
