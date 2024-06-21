import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import back from "../../../../public/images/NationalIDBack.jpg";
import front from "../../../../public/images/NationalIDFront.jpg";
import image from "../../../../public/images/defaultAvatar.jpg";
import defaultAPI from "../../../api/axios";
import TextInput from "../../common/textInput";
import Modal from "../../popupForm";
import useVirefyUser from "../virefyUser";
import toast from "react-hot-toast";
const RegistartionForm = () => {
  const [open, setOpen] = useState(false)
  const [Image, setImage] = useState({
    profile: image,
    front: front,
    back: back
  })
  const formRef = useRef(null)
  const { handleVirefyUser, isPending } = useVirefyUser(formRef);
  
  const formRefRegister = useRef()
    const { isPending: registerPending, mutate, isSuccess } = useMutation({
        mutationFn: ({ name, email, password, password_confirmation, approve_terms, avatar, address, phone, front_national_id, back_national_id  }) => defaultAPI.postForm('/auth/register', {
          name, email, password, password_confirmation, approve_terms, avatar, address, phone, front_national_id, back_national_id
        }),
        
        onSuccess: () => {
            toast.success("Success Verify Your Account")
            setOpen(true)
        },
        onError: (error) => {
            console.error("Sign-in error:", error);
        }
    });
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRefRegister.current);
        formData?.append("approve_terms",1)
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const password_confirmation = formData.get('password_confirmation');
        const approve_terms = formData.get('approve_terms'),
        avatar = formData.get("avatar"),
        address = formData.get("address"),
        phone = formData.get("phone"),
        front_national_id = formData.get("front_national_id"),
        back_national_id = formData.get("back_national_id")
        mutate({ name, email, password, password_confirmation, approve_terms, avatar, address, phone, front_national_id, back_national_id  });
    }
  return (
    <div className=" items-center flex justify-center px-5 lg:px-0">
        
        <div className="w-full  flex justify-center p-6 sm:p-12">
          <div className=" flex flex-col w-full items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-primary">
                Join Us
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <form ref={formRefRegister} onSubmit={onSubmit} className="w-full mt-8">
              <div className="mx-auto flex rounded-md flex-row flex-wrap justify-center shadow-md gap-4">
              <div className="mx-auto  flex flex-col justify-center items-center w-full  rounded-full">
                <img src={Image.profile} alt={"Profile Image"} className="w-[200px] h-[200px] rounded-full object-cover"/>
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="file"
                  name="avatar"
                  onChange={e=>setImage({...Image, profile: URL.createObjectURL(e?.target?.files[0])})}
                  placeholder="Add Photo"/>
              </div>
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                />
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                />
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  className="w-1/3 px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                />
                <div className="flex flex-col w-1/3">
                <label>Front National ID Photo</label>
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="file"
                  onChange={e=>setImage({...Image, front: URL.createObjectURL(e?.target?.files[0])})}
                  name="front_national_id"
                  placeholder="Front National ID Photo"
                />
                <img className={"w-full h-[250px] my-2 rounded-md"} src={Image.front} alt="photo"/>
                </div>
                <div className="flex flex-col w-1/3">
                <label>Back National ID Photo</label>
                <input
                onChange={e=>setImage({...Image, back: URL.createObjectURL(e?.target?.files[0])})}

                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="file"
                  name="back_national_id"
                  placeholder="Back National ID Photo"
                />
                <img className={"w-full h-[250px] my-2 rounded-md"} src={Image.back} alt="photo"/>
                </div>
                
                <button type="submit" disabled={registerPending} className="my-5 tracking-wide font-semibold bg-primary text-gray-100 w-1/2 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mb-2 w-full text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-primary font-semibold">Sign in</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <Modal open={open} disable={isPending} onClick={handleVirefyUser} innerBtnText={"Verify"} text={"Verify Your Account"}>
        <form ref={formRef}>
        <TextInput placeholder='Email' name='handle' type='email' required={true} label='email' />
        <TextInput placeholder='Code' name='code' type='code' required={true} label='code' />
        </form>
        </Modal>
        </div>
    </div>
  );
};
export default RegistartionForm;
