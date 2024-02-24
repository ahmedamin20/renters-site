import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useState } from "react";

import MainButton from "../../common/mianBtn";
import Div from "../../common/Div";
import { API_ENDPOINTS } from "../../../utils/config/constants";
import {
  getProfile,
  updatePassword,
  updateProfile,
} from "../../../api/queries/profile";
import TextHead from "../../common/headText";
import TextInput from "../../common/textInput";
import PasswordInput from "../../common/passwordInput";

export default function ProfilePageComponent() {

  const [imageUpdated, setImageUpdated] = useState(false);
  const profileFormRef = useRef(null);
  const passWordRef = useRef(null);
  const { data } = useQuery({
    queryKey: [API_ENDPOINTS.PROFILE],
    queryFn:  getProfile,
  });
  const [profileImage, setProfileImage] = useState(data?.data.avatar);

  console.log(data,"profile")
  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => getProfile(),
  });

  const { mutate: passwordUpdate, isPending: isPasswordLoading } = useMutation({
    mutationFn: updatePassword,
    onSuccess(data, variables, context) {},
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    mutate(profileFormRef.current);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    passwordUpdate(passWordRef.current);
  };
  return (
    <Div className="flex flex-col  justify-center items-center px-[5px] py-10 w-full">
      <form
        ref={profileFormRef}
        className="flex flex-col gap-10 w-full justify-center"
        onSubmit={handelSubmit}
      >
        <TextHead>profile</TextHead>
        <div className="form-wrapper">
          <div className="flex flex-col gap-[10px] w-full">
            <label className="before:content[' '] before:border-2 before:border-secondary-light-1 gap-2 flex flex-row font-bold">
              image
            </label>
            <input
              type="file"
              onChange={(e) => {
                setProfileImage(e.target.files[0]);
                setImageUpdated(true);
              }}
              name="image"
              className="border-gray-300 border w-full p-[5px] rounded-md"
            />
          </div>
          <img
            src={
              imageUpdated
                ? URL.createObjectURL(profileImage)
                : data?.data?.avatar
            }
            alt=""
            width={100}
            height={100}
          />
          <TextInput
            label="name"
            placeholder="name"
            type="text"
            name="name"
            defaultValue={data?.data?.name}
            required={true}
          />
          <TextInput
            label="email"
            placeholder="email"
            type="text"
            name="email"
            defaultValue={data?.data?.email}
            required={true}
          />
        </div>
        <MainButton
          disabled={isPending}
          type="submit"
          className="form-submit-button "
        >
          update
        </MainButton>
      </form>
      <form
        ref={passWordRef}
        className="flex flex-col gap-10 w-full justify-center mt-[25px]"
        onSubmit={handlePasswordSubmit}
      >
        <TextHead>
          <span>profile.passwordHead</span>
        </TextHead>
        <div className="form-wrapper">
          <PasswordInput
            name="password"
            required={true}
            placeholder="old_password"
            label="old_password"
          />
          <PasswordInput
            name="new_password"
            required={true}
            placeholder="new_password"
            label="new_password"
          />
          <PasswordInput
            name="new_password_confirmation"
            required={true}
            placeholder="new_password_confirmation"
            label="new_password_confirmation"
          />
        </div>
        <MainButton
          disabled={isPasswordLoading}
          type="submit"
          className="form-submit-button "
        >
          update
        </MainButton>
      </form>
    </Div>
  );
}
