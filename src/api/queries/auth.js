import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const signin = async (body) => {
    await defaultAPI.post(`${API_ENDPOINTS.SIGNIN}` ,body).then(res=>console.log(res))
};

export const signout = async () => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.SIGNOUT);
    return data;
  };