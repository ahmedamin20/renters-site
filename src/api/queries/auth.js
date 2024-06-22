import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const signin = async (body) => {
    await defaultAPI.post(`${API_ENDPOINTS.AUTH.SIGNIN}` ,body).then(res=>console.log(res))
};

export const signout = async () => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.AUTH.SIGNOUT);
    return data;
  };
export const verifyUser = async (formData) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.AUTH.VERIFY_USER, formData);
    return data;
  };
export const resendCode = async (formData) => {
    const { data } = await defaultAPI.post("auth/verify_user/resend", formData);
    return data;
  };