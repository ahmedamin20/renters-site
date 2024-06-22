import { useMutation } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultAPI from "../../../api/axios";
import { ACCESS_TOKEN, userId } from "../../../utils/config/constants";
const LoginWithGoogleButton = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: ({ email, password }) => defaultAPI.post('/auth/login/mobile', {
            email: email ,
            password: password ,
            fcm_token: "121232" 
        }),
        onSuccess: (res) => {
            localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
            localStorage.setItem(userId, res.data.data.id);
            navigate("/");
            // window.location.reload()
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
    <div className="flex bg-primary items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <form ref={formRef} onSubmit={onSubmit} className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-start text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
            name="password"
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button disabled={isPending} onClick={mutate} type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <Link to="/signup" className="text-blue-700"> Sign Up</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginWithGoogleButton;
