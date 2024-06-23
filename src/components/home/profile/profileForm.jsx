import React, { useRef, useState } from 'react'
import TextInput from '../../common/textInput'
import MainButton from '../../common/mianBtn'
import { API_ENDPOINTS } from '../../../utils/config/constants';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
    getProfile,
    updateProfile,
  } from "../../../api/queries/profile";
  import camera from "./camera.gif"
const ProfileForm = () => {
    const [imageUpdated, setImageUpdated] = useState(false);
    const imgRef = useRef(null);
    const profileFormRef = useRef(null);
    const { data } = useQuery({queryKey: [API_ENDPOINTS.PROFILE]})
    const [profileImage, setProfileImage] = useState(data?.data.avatar);
    console.log(data)
    const { mutate, isPending } = useMutation({
        mutationFn: updateProfile,
        onSuccess: () => getProfile(),
      });

      const handelSubmit = (e) => {
        e.preventDefault();
        mutate(profileFormRef.current);
      };

    return (
    <form
        ref={profileFormRef}
        className="flex flex-col gap-10  w-full"
        onSubmit={handelSubmit}
      >
      <h2 className="text-start font-bold text-[20px]">User Profile</h2>
      <div className="flex relative flex-col w-fit gap-[10px] mx-auto">
      <input onChange={(e)=>{
        setProfileImage(e?.target.files[0])
        setImageUpdated(true)
      }} name="avatar" className={"hidden"} ref={imgRef} type={"file"} label={"Profile Image"}/>
    <img
    onClick={()=>imgRef.current.click()}
    src={
      imageUpdated
        ? URL.createObjectURL(profileImage)
        : data?.data?.avatar
    }
    alt=""
    className="w-[150px] cursor-pointer rounded-full h-[150px]"
    width={100}
    height={100}
  />
    <img src={camera} className="absolute w-[20px] h-[20px] bottom-0 left-4"/>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] px-3">
          
          <TextInput
            label="Name"
            placeholder="Name"
            type="text"
            name="name"
            defaultValue={data?.data?.name}
            required={true}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            type="email"
            name="email"
            defaultValue={data?.data?.email}
            required={true}
          />
          <TextInput
            label="Address"
            placeholder="Address"
            type="text"
            name="address"
            defaultValue={data?.data?.address}
            required={true}
          />
          <TextInput
            label="Phone"
            placeholder="Phone"
            type="tel"
            name="phone"
            defaultValue={data?.data?.phone}
            required={true}
          />
          
        </div>
        <MainButton
          isLoading={isPending}
          type="submit"
          className="form-submit-button mx-auto w-[45%]"
        >
          Update
        </MainButton>
      </form>
  )
}

export default ProfileForm
